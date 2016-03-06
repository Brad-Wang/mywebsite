<?php
class User_model extends CI_Model{

    public function check_login($user_name,$user_pwd)
    {
        $query = $this->db->query("select * from t_user where name='$user_name' and password='$user_pwd'");
        return $query->row();
    }
}
?>