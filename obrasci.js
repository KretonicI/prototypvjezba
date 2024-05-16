//model za brojanje koraka
//Modul će se brinuti o broju koraka

var brojanjeKoraka= (function(){
    //to do - dio koda za brojanje koraka
    var koraci = 0;
    function _increaseSteps(){
        koraci ++; }
        return{
        walk: function(){
            _increaseSteps();  
        },
        
        getTotalSteps: function(){
            return koraci;

        },
        run: function(){
            koraci += 5;
        }
    }
})();

module.exports = brojanjeKoraka;
