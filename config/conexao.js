import dns from "node:dns";
dns.setServers(["8.8.8.8", "1.1.1.1"]);

import mongoose from "mongoose";

const url = "mongodb+srv://jennifer:123@cluster0.dmcxu1k.mongodb.net/?appName=Cluster0";
const conexao = await mongoose.connect(url);

export default conexao;