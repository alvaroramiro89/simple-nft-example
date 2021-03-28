/* eslint no-use-before-define: "warn" */
const fs = require("fs");
const chalk = require("chalk");
const { config, ethers } = require("hardhat");
const { utils } = require("ethers");
const R = require("ramda");
const ipfsAPI = require('ipfs-http-client');
const ipfs = ipfsAPI({host: 'ipfs.infura.io', port: '5001', protocol: 'https' })

const delayMS = 1000 //sometimes xDAI needs a 6000ms break lol 😅

const main = async () => {

  // ADDRESS TO MINT TO:
  const toAddress = "0x2501007dfCa40d605C620ed92a6161fEb5A6e18F"

  console.log("\n\n 🎫 Minting to "+toAddress+"...\n");

  const yourCollectible = await ethers.getContractAt('YourCollectible', fs.readFileSync("./artifacts/YourCollectible.address").toString())


  const pipi = {
    "description": "El último diez?",
    "external_url": "https://i.ibb.co/7RdKjmB/romagnoli.jpg",// <-- this can link to a page for the specific file too
    "image": "https://i.ibb.co/7RdKjmB/romagnoli.jpg",
    "name": "Leandro Romagnoli",
    "attributes": [
       {
         "trait_type": "Pase",
         "value": "Pasador legendario"
       },
       {
         "trait_type": "Superpoder",
         "value": "Engancha y le pega"
       },
       {
         "trait_type": "Resiliencia a lesiones",
         "value": "0"
       }
    ]
  }
  console.log("Uploading pipi...")
  const uploaded = await ipfs.add(JSON.stringify(pipi))

  console.log("Minting pipi with IPFS hash ("+uploaded.path+")")
  await yourCollectible.mintItem(toAddress,uploaded.path,{gasLimit:400000})


  await sleep(delayMS)


  const gata = {
    "description": "Mitad hombre mitad animal",
    "external_url": "https://i.ibb.co/hcy45d9/fernandez.jpg",// <-- this can link to a page for the specific file too
    "image": "https://i.ibb.co/hcy45d9/fernandez.jpg",
    "name": "Gata Fernández",
    "attributes": [
       {
         "trait_type": "Pase",
         "value": "Pura tintura, la pasa más o menos"
       },
       {
         "trait_type": "Superpoder",
         "value": "Hace buenas milanesas"
       },
       {
         "trait_type": "Resiliencia a lesiones",
         "value": "Medio blandito"
       }
    ]
  }
  console.log("Uploading gata...")
  const uploadedgata = await ipfs.add(JSON.stringify(gata))

  console.log("Minting gata with IPFS hash ("+uploadedgata.path+")")
  await yourCollectible.mintItem(toAddress,uploadedgata.path,{gasLimit:400000})



  await sleep(delayMS)


  const tuiti = {
    "description": "Un SIN fronteras",
    "external_url": "https://i.ibb.co/Yc6rcj7/carrario.jpg",// <-- this can link to a page for the specific file too
    "image": "https://i.ibb.co/Yc6rcj7/carrario.jpg",
    "name": "Silvio Carrario",
    "attributes": [
       {
         "trait_type": "Pase",
         "value": "La pasa como puede"
       },
       {
         "trait_type": "Superpoder",
         "value": "Jugó hasta en la luna"
       },
       {
         "trait_type": "Resiliencia a lesiones",
         "value": "se la banca"
       }
    ]
  }
  console.log("Uploading tuiti...")
  const uploadedtuiti = await ipfs.add(JSON.stringify(tuiti))

  console.log("Minting tuiti with IPFS hash ("+uploadedtuiti.path+")")
  await yourCollectible.mintItem(toAddress,uploadedtuiti.path,{gasLimit:400000})



  await sleep(delayMS)


  const olave = {
    "description": "No pasa un psicotécnico",
    "external_url": "https://i.ibb.co/1vYJywC/olave.jpg",// <-- this can link to a page for the specific file too
    "image": "https://i.ibb.co/1vYJywC/olave.jpg",
    "name": "Juan Carlos Olave",
    "attributes": [
       {
         "trait_type": "Pase",
         "value": "con la mano"
       },
       {
         "trait_type": "Superpoder",
         "value": "Es el primo de Rodrigo"
       },
       {
         "trait_type": "Resiliencia a lesiones",
         "value": "Nunca se lesionó"
       }
    ]
  }
  console.log("Uploading olave...")
  const uploadedolave = await ipfs.add(JSON.stringify(olave))

  console.log("Minting olave with IPFS hash ("+uploadedolave.path+")")
  await yourCollectible.mintItem(toAddress,uploadedolave.path,{gasLimit:400000})



  await sleep(delayMS)


  const sapito = {
    "description": "Anfibio hiperhabilioso",
    "external_url": "https://i.ibb.co/ZxSHWdk/encina.jpg",// <-- this can link to a page for the specific file too
    "image": "https://i.ibb.co/ZxSHWdk/encina.jpg",
    "name": "Hernán Sapito Encina",
    "attributes": [
       {
         "trait_type": "Pase",
         "value": "Pasador lírico"
       },
       {
         "trait_type": "Superpoder",
         "value": "Hace jugar a los muertos"
       },
       {
         "trait_type": "Resiliencia a lesiones",
         "value": "Le falta entrenamiento físico, asique se lesiona"
       }
    ]
  }
  console.log("Uploading sapito...")
  const uploadedsapito = await ipfs.add(JSON.stringify(sapito))

  console.log("Minting sapito with IPFS hash ("+uploadedsapito.path+")")
  await yourCollectible.mintItem(toAddress,uploadedsapito.path,{gasLimit:400000})

  await sleep(delayMS)

  console.log("Transferring Ownership of YourCollectible to "+toAddress+"...")

  await yourCollectible.transferOwnership(toAddress)

  await sleep(delayMS)

  /*


  console.log("Minting zebra...")
  await yourCollectible.mintItem("0xD75b0609ed51307E13bae0F9394b5f63A7f8b6A1","zebra.jpg")

  */


  //const secondContract = await deploy("SecondContract")

  // const exampleToken = await deploy("ExampleToken")
  // const examplePriceOracle = await deploy("ExamplePriceOracle")
  // const smartContractWallet = await deploy("SmartContractWallet",[exampleToken.address,examplePriceOracle.address])



  /*
  //If you want to send value to an address from the deployer
  const deployerWallet = ethers.provider.getSigner()
  await deployerWallet.sendTransaction({
    to: "0x34aA3F359A9D614239015126635CE7732c18fDF3",
    value: ethers.utils.parseEther("0.001")
  })
  */


  /*
  //If you want to send some ETH to a contract on deploy (make your constructor payable!)
  const yourContract = await deploy("YourContract", [], {
  value: ethers.utils.parseEther("0.05")
  });
  */


  /*
  //If you want to link a library into your contract:
  // reference: https://github.com/austintgriffith/scaffold-eth/blob/using-libraries-example/packages/hardhat/scripts/deploy.js#L19
  const yourContract = await deploy("YourContract", [], {}, {
   LibraryName: **LibraryAddress**
  });
  */

};

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
