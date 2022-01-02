import { ENS } from "@ensdomains/ensjs";
import { ethers } from "ethers";
const provider = new ethers.providers.AlchemyProvider(
  "homestead",
  process.env.NEXT_PUBLIC_ALCHEMY_API
);
const ENSInstance = new ENS();
export async function getAddress(ens: string) {
  try {
    await ENSInstance.setProvider(provider);

    const address = await provider.resolveName(ens);
    console.log({ address });
    return address;
  } catch (error) {
    console.log(error);
  }
}
export const getName = async (address: string) => {
  try {
    var name = await provider.lookupAddress(address);
    console.log({ name });
    return name;
  } catch (error) {
    console.log(error);
  }
};
