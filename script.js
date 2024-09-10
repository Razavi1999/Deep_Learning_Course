function ConnectButton(){
  console.log("Connect pushed");
  document.querySelector("#top-toolbar > colab-connectbutton").shadowRoot.querySelector("#connect").click()
}
setInterval(ConnectButton,60000);
