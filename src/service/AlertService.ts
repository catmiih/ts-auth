import { Prisma, PrismaClient } from "@prisma/client";

import Alert from "../model/Alert";
import Active from "../model/Active";
import User from "../model/User";

const prisma = new PrismaClient();

class AlertService {
  async generateNotify(active: Active, user: User, action: string, message:string){
    this.createAlert(new Alert({
      active,user,type:"notify",action,message
    }))
  }

  async generateLog(active: Active, user: User, action: string, message:string){
    this.createAlert(new Alert({
      active,user,type:"log",action,message
    }))
  }

  /* Criação de log no sistema*/
  async createAlert(alert: Alert) {
    const alertData = {
      active: { connect: { id: alert.active_id || 0 } },
      user: { connect: { id: alert.user_id || 0 } },
      type: alert.type || "",
      action: alert.action || "", 
      created_at: new Date(),
      message: alert.message || "",
      status: 0
    };
  
    try {
      return await prisma.alert.create({ data: alertData });
    } catch (error: any) {
      return null;
    }
  }
}

export default AlertService;
