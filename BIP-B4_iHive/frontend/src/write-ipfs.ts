import { pinata } from "./utils/config";

const processData = async(name: string, email: string, ideaTitle: string, tagline: string, description: string) => {
const upload = await pinata.upload.json({
  name: name,
  email: email,
  ideaTitle: ideaTitle,
  tagline: tagline,
  description: description
});
return upload;
};

export default processData;