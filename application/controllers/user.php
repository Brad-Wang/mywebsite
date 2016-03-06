<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');
class User extends CI_Controller{

    public function admin_login()
    {
        $this->load->view('admin/login');
    }

    public function do_login()
    {
        $user_name = $this->input->post('user_name');
        $user_pwd = $this->input->post('user_pwd');
        $rem_login = $this->input->post('rem_login');
        $this->load->model('user_model');
        $row = $this->user_model->check_login($user_name,$user_pwd);
        if($row && $rem_login==1){
            $array = array(
                'name'=>$user_name,
                'state'=>'yes'
            );
            $this->session->set_userdata($array);
            redirect('user/go_admin_index');
        }else if($row){
            redirect('user/go_admin_index');
        }else{
            redirect('user/admin_login');
        };
    }

    public function go_admin_index()
    {
        $this->load->view('admin/admin-index');
    }




}
?>