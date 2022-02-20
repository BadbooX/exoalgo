from pickle import TRUE
import random
print("EXO 1")
a = 5
print(a)

print("EXO 2")
print
a = 7
b = 17
result = a + b
print(result)
result = a - b
print(result)
result = a * b
print(result)

print("EXO 3")
a = "hello mate\n"
print(a)

print("EXO 4")
a = "coucou"
b = " petite perruche"
print(a + b)

print("Exo 5")
a = 20 
b = 30 
z = b
b = a
a = z
print(a, b)

print("Exo 6")
a = 20 
b = 30 
# Code à ajouter ci-dessous 
if(a > b):
    print("A est supérieur à B")


elif(b > a):
    print("B est supérieur à A")

else:
    print("Les chiffres sont égaux")

print("Exo 7")
a = 20
b = 20
print("La valeur A = " + str(a))
print("La valeur B = " + str(b))
def maFonction():
    if(a > b):
        print("A est supérieur à B")
    elif(b > a):
        print("B est supérieur à A")
    else:
        print("Les chiffres sont égaux")

maFonction()

print("Exo 8")
print(random.randint( 0, 10))

print("Exo 9")
a = 0
while(a < 10):
    print(str(random.randint(1,20))) 
    a += 1

print("Exo 10")
a = 0
while (a < 90):
    a = random.randint(1,100)
    print(a)
if(a >= 90):
    print("C'est finis")

print("EXO 11")
a = input("Quel est votre mot ? ")
print("Vous avez choisit le mot :")
print(a)

print('EXO 12')
a = int(input('Entrez un nombre ici :'))
print("Vous avez choisis le nombre : " + str(a))
if(a % 2 == 0):
    print("Votre nombre est un nombre pair")
elif(a % 2 >= 0):
    print('Votre nombre est impair')

print("EXO 13")
v = input('Entrez un nombre ici :')

if(v.isnumeric() == False):
    print('ERREUR: Vous devez entrer un nombre')
elif(v % 2 == 0):
    print("Votre nombre est un nombre pair")
    print("Vous avez choisis le nombre : " + str(v))
elif(v % 2 >= 0):
    print('Votre nombre est impair')
    print("Vous avez choisis le nombre : " + str(v))

print('EXO 14')
m = input("Entrez une année : ")
if(m %4  == 0):
    print("C'est une année Bisextile")
else:
    print("C'est une année Sextile")
print('EXO 15')
print("Entrez une date : ")
t = input()