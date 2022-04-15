console.log("Je vais d'abord imprimer");
let callback = function(){
    console.log("Je vais attendre 5 secondes et terminer la tâche");
};
setTimeout(callback, 5000)