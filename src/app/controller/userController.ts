import userModel from '../models/contact';
import { Request, Response } from 'express'; 

export default class UserController {
    async get (req: Request, res: Response) {
      try {
        const user = await userModel.find(req.body);
        return res.status(200).json(user);

      } catch (error) {
        return res.status(500).json(error);
      }
    }

    async post(req: Request, res: Response) {
        try {
            const user = new userModel({ 
                name: req.body.name
            })
            const result = await user.save(req.body);
            return res.status(201).json(result);
    
        } catch (error) {
            return res.status(500).json(error);
        }
    }
    
    async put(req: Request, res: Response) {
        try {
            const user = await userModel.findById(req.body);
            return res.status(200).json(user);
    
        } catch (error) {
            return res.status(500).json(error);
        }
    }

    async delete(req: Request, res: Response) {
       try {
           const user = await userModel.remove(req.params.id);
           return res.status(200).json(user);

       } catch (error) {
           return res.status(500).json(error);
       }  
    }
}