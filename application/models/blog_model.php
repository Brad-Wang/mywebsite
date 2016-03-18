<?php
class Blog_model extends CI_Model{
    public function save_blog($title,$type,$content,$img,$author,$summary)
    {
        return $this->db->query("insert into t_blog(id,title,content,addtime,type,img,author,summary) VALUE(null,'$title','$content',now(),'$type','$img','$author','$summary')");
    }
    public function get_blog()
    {
        $this->db->order_by('addtime','desc');
        $result = $this->db->get('t_blog');
        return $result->result();
    }

    public function delete_blog_by_id($blog_id)
    {
        return $row = $this->db->query("delete from t_blog where id='$blog_id'");
    }

    public function get_some_blog($offset)
    {
        $this->db->order_by('addtime','desc');
        $result = $this->db->get('t_blog',6,$offset*6);
        return $result->result();
    }

    public function get_blog_by_id($bid)
    {
        $query = $this->db->query("select * from t_blog where id='$bid'");

        return $query->row();
    }
}
?>