<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');
class Message extends CI_Controller{
    public function save_message()
    {
        $name = $this->input->get('name');
        $email = $this->input->get('email');
        $phone = $this->input->get('phone');
        $content = $this->input->get('content');

        $this->load->model('message_model');
        $row = $this->message_model->save_message($name,$email,$phone,$content);
        echo $row;
    }

    public function go_admin_message_list()
    {

        $this->load->model('message_model');
        $result = $this->message_model->get_all_message();
        $data['message'] = $result;
        $this->load->view('admin/admin-message-list',$data);
    }

    public function delete_message()
    {
        $message_id = $this->input->post('Mid');
        $this->load->model('message_model');
        $row = $this->message_model->delete_blog_by_id($message_id);
        echo $row;
    }
}
?>