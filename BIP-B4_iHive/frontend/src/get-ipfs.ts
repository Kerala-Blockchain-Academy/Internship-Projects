import { pinata } from "./utils/config";

const retrieveData = async (hash: string) => {
  const data = await pinata.gateways.get(hash);
  return data;
};

export default retrieveData;