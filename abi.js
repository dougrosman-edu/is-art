// change this each time you deploy a new contract
var contractAddress = "0xba1CB9525Fc13112A75eD812B91A2Fb0014ddFed";

// paste contract ABI here
var contractABI = [
	{
		"inputs": [],
		"name": "changeStatus",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getStatus",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "isArt",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]