names = ['john ClEEse','Eric IDLE','michael']
names1 = ['graHam chapman', 'TERRY', 'terry jones']
extra_name = input("Give me a name:")
extra_name_two = input("Give me a another name:")

invitations_list_og = names + names1
invitations_list_og.append(extra_name)
invitations_list_og.append(extra_name_two)


for guest in invitations_list_og:
    print(f"{guest.lower().title()}! You are invited to the party on saturday.")