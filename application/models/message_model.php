<?php
class Message_model extends CI_Model{
    public function save_message($name,$email,$phone,$content){
        $row = $this->db->query("insert into t_message(id,content,addtime,name,email,phone) values(null,'$content',now(),'$name','$email','$phone')");
        return $row;
    }

    public function get_all_message()
    {
        $result = $this->db->query("select * from t_message");
        return $result->result();
    }

    public function delete_blog_by_id($message_id)
    {
        return $row = $this->db->query("delete from t_message where id='$message_id'");
    }
}
?>