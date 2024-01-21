import axios from 'axios';
import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class ActiveService {
    async getActiveSymbols(keywords: string): Promise<string[]> {
        const apiKey = '440BN7Y0K0M7A3A2';  // Substitua pela sua chave de API da Alpha Vantage
        const endpoint = 'https://www.alphavantage.co/query?function=SYMBOL_SEARCH';
        
        try {
          const response = await axios.get(endpoint, {
            params: {
              keywords,
              apikey: apiKey,
            },
          });
    
          const symbols: string[] = response.data.bestMatches.map((match: any) => match['1. symbol']);
          return symbols;
        } catch (error:any) {
          console.error('Erro ao obter símbolos ativos:', error.message);
          throw error;
        }
      }
}

export default ActiveService;