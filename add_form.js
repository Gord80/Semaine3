document.body.onload = (function()
{
    var required_fields = ['produit-reference','produit-libelle','produit-categorie','produit-prix','produit-stock'];
    var required_fields_name = ['reference','libelle','categorie','prix','stock'];
    for (var i = 0; i < required_fields.length; i++) 
    {
        var champ_courant = document.getElementById(required_fields[i]);
        champ_courant.dataset.indice = i;
        
        champ_courant.addEventListener("blur", function(e)
        {
            var paragraphe_courant = document.getElementById('erreur-'+required_fields_name[this.dataset.indice]);
            if (this.value.trim()=="")
            {
                paragraphe_courant.innerHTML = "Veuillez renseigner ce champ.";
                paragraphe_courant.className = "alert alert-danger";
            }
            else
            {
                paragraphe_courant.innerHTML = "";
                paragraphe_courant.className = "";
            }
        });
    }
});