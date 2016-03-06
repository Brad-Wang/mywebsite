<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');
class Blog extends CI_Controller{
    public function go_admin_push_blog()
    {
        $this->load->view('admin/admin-push-blog');
    }

    public function add_blog()
    {
        $config['upload_path'] = './uploads/';
        $config['allowed_types'] = 'gif|jpg|png';
        $config['max_size'] = '2000';
        $config['max_width'] = '1024';
        $config['max_height'] = '768';
        $config['overwrite'] = FALSE;
        $config['encrypt_name'] = TRUE;

        $this->load->library('upload', $config);

        $this->upload->do_upload('img');

        $array = $this->upload->data();

        $author = $this->session->userdata('name');
        $title = $this->input->post('title');
        $type = $this->input->post('type');
        $content = $this->input->post('content');
        $summary = $this->input->post('summary');
        $img = $array['full_path'];

        $this->load->model('blog_model');
        $result = $this->blog_model->save_blog($title,$type,$content,$img,$author,$summary);

        $data['result'] = 'blog'.$result;
        $this->load->view('admin/change_page',$data);
    }

    public function go_admin_blog_list()
    {
        $this->load->model('blog_model');
        $result = $this->blog_model->get_blog();
        $data['result'] = $result;
        $this->load->view('admin/admin-blog-list',$data);
    }

    public function delete_blog()
    {
        $blog_id = $this->input->post('Bid');
        $this->load->model('blog_model');
        $row = $this->blog_model->delete_blog_by_id($blog_id);
        echo $row;
    }
}
?>