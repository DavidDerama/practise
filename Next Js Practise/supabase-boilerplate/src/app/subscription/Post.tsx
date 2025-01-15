import { supabaseBrowser } from "@/lib/supabase/client";
import React, { useEffect } from "react";

export default function Post() {
  const getPost = async () => {
    const supabase = supabaseBrowser();
    const { data } = await supabase.from("post").select("*");
    console.log(data);
  };

  useEffect(() => {
    getPost();
  }, []);
  return <div>Post</div>;
}
