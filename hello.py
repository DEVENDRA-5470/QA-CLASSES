print('Generating the odd even numbers from range(1,31)')
evenlist = [i for i in range(1,31) if i % 2==0]
oddlist = [i for i in range(1,31) if i not in evenlist]

