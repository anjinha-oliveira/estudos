number = int(input('Digite o número para fazer a tabuada: '))
print(f'***---***'*3)
print(f'Segue abaixo a tabuada')
print(f'***---***'*3)
for i in range(1,11):
    tabuada = (number * i)
    print(f'{i} x {number} = {tabuada}')


