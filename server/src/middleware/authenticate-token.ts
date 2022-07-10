import { AuthService } from "../service/auth-service";
import { Request, Response, NextFunction } from "express";
import Container from "typedi";


const authService: AuthService = Container.get(AuthService);

function authenticateToken(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers['authorization'];
    const token: string | undefined = authHeader && authHeader.split(' ')[1];
  
    if (token == null) return res.sendStatus(401);

    authService.verify(token, (err: any, user: any) => {
        console.log(err);
    
        if (err) return res.sendStatus(403);
        
        next();
    })
  
  }