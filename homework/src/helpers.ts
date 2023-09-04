export const getPosts = async ( limit?:number) => {
  return await fetch(`https://studapi.teachmeskills.by/blog/posts/?limit=${limit}`)
    // .then((res) => res.json())
    // .then((res) => {
    //   let data = res.results;
    //   setValue(data);
    // })
    // .catch((err) => console.log(err.message));
};

//setValue: (value: []) => void,