print("Some números; digite 0 para encerrar.")
soma = 0
num = float(input("Número: "))

while num != 0:
    soma += num # acumulador
    
    num = float(input("Número: "))

print("Soma total =", soma)