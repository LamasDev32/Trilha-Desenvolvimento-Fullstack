/* 

Declare variáveis com nomes descritivos para armazenar o nome de um
produto, seu preço e a quantidade em estoque.

*/

produto = "Laptop DELL";
preco = 2500.0;
estoque = 10;

function vender() {
    if (produto === "Laptop DELL") {
        estoque -= 1;
        console.log(`Seu estoque atual é de ${estoque}`);
        console.log(
            `Sua compra do ${produto} custou ${preco}. Obrigado por comprar conosco!`,
        );
    } else {
        console.log("Produto invalido");
    }
}

vender();
