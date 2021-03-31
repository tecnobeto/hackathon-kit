import userModel from '../models/contact';

export default class ContactController {
    async get (request, response) {
      try {
        const user = await userModel.find(request.body);
        return response.status(200).json(user);

      } catch (error) {
        return response.status(500).json(error);
      }
    }

    async post(request, response) {
        try {
            const user = new userModel({ 
                name: request.body.name
            })
            const result = await user.save(request.body);
            return response.status(201).json(result);
    
        } catch (error) {
            return response.status(500).json(error);
        }
    }
    
    async put(request, response) {
        try {
            const user = await userModel.findById(request.body);
            return response.status(200).json(user);
    
        } catch (error) {
            return response.status(500).json(error);
        }
    }

    async delete(request, response) {
       try {
           const user = await userModel.remove(request.params.id);
           return response.status(200).json(user);

       } catch (error) {
           return response.status(500).json(error);
       }  
    }
}