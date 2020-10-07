import api from '@config/api';

export const getBookList = () =>
    api.get ('/booklists') .then((response)=> {
        if (response.ok){
            return response.data;
    }    
      return;
})