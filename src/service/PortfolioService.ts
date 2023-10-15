import { Prisma, PrismaClient } from "@prisma/client";
import Portfolio from "../model/Portfolio";

const prisma = new PrismaClient();

class PortfolioService {
    // Função para obter uma carteira por usuario
  async getWallet(id: number |undefined) {
    let portfolioList = [];

    const ports = await prisma.portfolio.findMany({
      where: {userId: id}
    });

    for(let portData of ports){
        let portfolio = new Portfolio(portData)

        const transactions = await prisma.transaction.findMany({
            where:{port: portData}
        })
        portfolio.transactions = transactions

        portfolioList.push(portfolio)
    }

    return portfolioList;
  }
}

export default PortfolioService;