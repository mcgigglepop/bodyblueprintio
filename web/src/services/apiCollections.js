import supabase from "./supabase";

export async function getCollections() {
  const { data, error } = await supabase
  .from('collections')
  .select('*');

  if (error) {
    console.error(error);
    throw new Error("Collections could not be loaded");
  }

  return data;
}