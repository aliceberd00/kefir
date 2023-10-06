import axios from "axios";

async function getAuthorRequest(){
    const {data} = await axios.get('./Types/Author.ts')
    return data;
}

export default getAuthorRequest;