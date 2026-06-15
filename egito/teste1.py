
quantidade = int(input("Digite a quantidade de cadernos que deseja comprar: "))

preco_unitario = 25.00

valor_total = quantidade * preco_unitario

if quantidade > 6:
    desconto = valor_total * 0.15
    valor_final = valor_total - desconto
    print(f"Desconto de 15% aplicado! Você economizou: R$ {desconto:.2f}")
else:
    valor_final = valor_total
    print("Nenhum desconto aplicado.")

print(f"Valor total da compra: R$ {valor_final:.2f}")