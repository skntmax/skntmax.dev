export const utils = {
    
    checkDiscription : function (obj){
            if (typeof obj !== 'object' || obj === null) return false;
          
            // Check required keys
            const requiredKeys = ['question', 'options', 'correctAnswer', 'description'];
            for (let key of requiredKeys) {
              if (!obj.hasOwnProperty(key)) {
                console.log(`Missing key: ${key}`);
                return false;
              }
            }
          
            // Validate question
            if (typeof obj.question !== 'string' || obj.question.trim() === '') {
              console.log('Invalid question');
              return false;
            }
          
            // Validate options (array of strings)
            if (!Array.isArray(obj.options) || obj.options.length === 0) {
              console.log('Options must be a non-empty array');
              return false;
            }
            for (let option of obj.options) {
              if (typeof option !== 'string') {
                console.log('Invalid option: must be a string');
                return false;
              }
            }
          
            // Validate correctAnswer (number, should be an index within the options array)
            if (typeof obj.correctAnswer !== 'number' || obj.correctAnswer < 0 || obj.correctAnswer >= obj.options.length) {
              console.log('Invalid correctAnswer index');
              return false;
            }
          
            // Validate description (string)
            if (typeof obj.description !== 'string' || obj.description.trim() === '') {
              console.log('Invalid description');
              return false;
            }
          
            return true;
            

    } ,

}