import { useState } from "react";\
// hook for element from result array
export default response => {
  const [title, setTitle] = useState(response.title);
  const [company, setCompany] = useState(response['company']['display-name']);
  const [created, setCreated] = useState(response['created']);
const [location, setLocation] = useState(response["location"]["display-name"]);
const [description, setDescription] = useState(response["description"]);
const [url, setURL] = useState(response["redirect_url"]);
return { title, company, created, location, description, url}
}