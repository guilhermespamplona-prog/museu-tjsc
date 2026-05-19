import type { CompositionTerm } from "./types";

const sourceBaseUrl = "https://www.tjsc.jus.br/web/memoria";

function members(value: string) {
  return value.trim().split("\n").map((name) => name.trim()).filter(Boolean);
}

const compositionSeed: Array<Omit<CompositionTerm, "imageUrl" | "imageAlt" | "sourceUrl">> = [
  {
    period: "2024-2026",
    president: "Francisco José Rodrigues de Oliveira Neto",
    dateRange: "2 de fevereiro de 2024 a 2 de fevereiro de 2026",
    members: members(`
Pedro Manoel Abreu
Luiz Cézar Medeiros
Sérgio Roberto Baasch Luz
Antônio do Rêgo Monteiro Rocha
José Antônio Torres Marques
Ricardo Orofino da Luz Fontes
Maria do Rocio Luz Santa Ritta
Cid José Goulart Júnior
Alexandre d’lvanenko
Jaime Ramos
José Carlos Carstens Köhler
Sergio Izidoro Heil
João Henrique Blasi
Jorge Luiz de Borba
Rejane Andersen
Soraya Nunes Lins
Jairo Fernandes Gonçalves
Raulino Jacó Brüning
Roberto Lucas Pacheco
Luiz Fernando Boller
Carlos Alberto Civinski
Paulo Roberto Sartorato
Túlio José Moura Pinheiro
Ricardo José Roesler
Robson Luz Varella
Sérgio Antônio Rizelo
Denise Volpato
Getúlio Corrêa
Sebastião César Evangelista
Carlos Adilson Silva
Ernani Guetten de Almeida
Rogério Mariano do Nascimento
Altamiro de Oliveira
Saul Steil
Selso de Oliveira
Newton Varella Júnior
Rodolfo Cezar Ribeiro da Silva Tridapalli
Leopoldo Augusto Brüggemann
Odson Cardoso Filho
Volnei Celso Tomazini
Gilberto Gomes de Oliveira
José Everaldo Silva
Júlio César Knoll
Paulo Henrique Moritz Martins da Silva
Vera Lúcia Ferreira Copetti
Cinthia Beatriz da Silva Bittencourt Schaefer
André Carvalho
André Luiz Dacol
Cláudia Lambert de Faria
Francisco José Rodrigues de Oliveira Neto
Guilherme Nunes Born
Jaime Machado Júnior
Janice Goulart Garcia Ubialli
Luiz Zanelato
Rubens Schulz
Dinart Francisco Machado
Eduardo Mattos Gallo Júnior
Gerson Cherem II
Hélio do Valle Pereira
Rosane Portella Wolff
Artur Jenichen Filho
Denise de Souza Luiz Francoski
Luiz César Schweitzer
Luiz Neri Oliveira de Souza
Norival Acácio Engel
Vilson Fontana
Hélio David Vieira Figueira dos Santos
José Agenor de Aragão
Júlio César Machado Ferreira de Melo
Sidney Eloy Dalabrida
Ariovaldo Rogério Ribeiro da Silva
Álvaro Luiz Pereira de Andrade
Hildemar Meneguzzi de Carvalho
Luiz Antônio Zanini Fornerolli
Antônio Zoldan da Veiga
Haidée Denise Grin
Carlos Roberto da Silva
Osmar Nunes Júnior
Luiz Felipe Siegert Schuch
José Maurício Lisboa
Bettina Maria Maresch de Moura
Ana Lia Barboza Moura Vieira Lisboa Carneiro
Flávio André Paz de Brum
Sandro José Neis
Diogo Nicolau Pítsica
Marcos Fey Probst
Sílvio Dagoberto Orsatto
Edir Josias Silveira Beck
Roberto Lepper
João Eduardo de Nadal
Márcio Rocha Cardoso
Osmar Mohr
Alex Heleno Santore
Fernanda Sell de Souto Goulart Fernandes
Stephan Klaus Radloff
Renato Luiz Carvalho Roberge
Érica Lourenço de Lima Ferreira
Emanuel Schenkel do Amaral e Silva
Gladys Afonso
Antônio Carlos Junckes dos Santos
João Marcos Buch
Eliza Maria Strapazzon
Vitoraldo Bridi
Alexandre Morais da Rosa
Andrea Cristina Rodrigues Studer
Antonio Augusto Baggio e Ubaldo
Brigitte Remor de Souza May
Geraldo Corrêa Bastos
Jaber Farah Filho
João Alexandre Dobrowolski Neto
Maurício Cavallazzi Póvoas
Quitéria Tamanini Vieira
Sérgio Luiz Junkes
Yhon Tostes
Willian Medeiros de Quadros
`),
  },
  {
    period: "2023-2024",
    president: "Altamiro de Oliveira",
    dateRange: "1º de novembro de 2023 a 2 de fevereiro de 2024",
    members: members(`
Pedro Manoel Abreu
Luiz Cézar Medeiros
Sérgio Roberto Baasch Luz
Antônio do Rêgo Monteiro Rocha
José Antônio Torres Marques
Ricardo Orofino da Luz Fontes
Salim Schead dos Santos
Maria do Rocio Luz Santa Ritta
Cid José Goulart Júnior
Alexandre d’lvanenko
Jaime Ramos
José Carlos Carstens Köhler
Sergio Izidoro Heil
João Henrique Blasi
Jorge Luiz de Borba
Rejane Andersen
Soraya Nunes Lins
Jairo Fernandes Gonçalves
Raulino Jacó Brüning
Roberto Lucas Pacheco
Luiz Fernando Boller
Carlos Alberto Civinski
Paulo Roberto Sartorato
Túlio José Moura Pinheiro
Ricardo José Roesler
Robson Luz Varella
Sérgio Antônio Rizelo
Denise Volpato
Getúlio Corrêa
Sebastião César Evangelista
Carlos Adilson Silva
Ernani Guetten de Almeida
Rogério Mariano do Nascimento
Altamiro de Oliveira
Saul Steil
Selso de Oliveira
Newton Varella Júnior
Rodolfo Cezar Ribeiro da Silva Tridapalli
Leopoldo Augusto Brüggemann
Odson Cardoso Filho
Volnei Celso Tomazini
Gilberto Gomes de Oliveira
José Everaldo Silva
Júlio César Knoll
Paulo Henrique Moritz Martins da Silva
Vera Lúcia Ferreira Copetti
Cinthia Beatriz da Silva Bittencourt Schaefer
André Carvalho
André Luiz Dacol
Cláudia Lambert de Faria
Francisco José Rodrigues de Oliveira Neto
Guilherme Nunes Born
Jaime Machado Júnior
Janice Goulart Garcia Ubialli
Luiz Zanelato
Rubens Schulz
Dinart Francisco Machado
Eduardo Mattos Gallo Júnior
Gerson Cherem II
Hélio do Valle Pereira
Rosane Portella Wolff
Artur Jenichen Filho
Denise de Souza Luiz Francoski
Luiz César Schweitzer
Luiz Neri Oliveira de Souza
Norival Acácio Engel
Vilson Fontana
Hélio David Vieira Figueira dos Santos
José Agenor de Aragão
Júlio César Machado Ferreira de Melo
Sidney Eloy Dalabrida
Ariovaldo Rogério Ribeiro da Silva
Álvaro Luiz Pereira de Andrade
Hildemar Meneguzzi de Carvalho
Luiz Antônio Zanini Fornerolli
Antônio Zoldan da Veiga
Haidée Denise Grin
Carlos Roberto da Silva
Osmar Nunes Júnior
Luiz Felipe Siegert Schuch
José Maurício Lisboa
Bettina Maria Maresch de Moura
Ana Lia Barboza Moura Vieira Lisboa Carneiro
Flávio André Paz de Brum
Sandro José Neis
Diogo Nicolau Pítsica
Marcos Fey Probst
Sílvio Dagoberto Orsatto
Edir Josias Silveira Beck
Roberto Lepper
João Eduardo de Nadal
Márcio Rocha Cardoso
Osmar Mohr
Alex Heleno Santore
Fernanda Sell de Souto Goulart Fernandes
Stephan Klaus Radloff
Érica Lourenço de Lima Ferreira
Emanuel Schenkel do Amaral e Silva
Gladys Afonso
`),
  },
  {
    period: "2022-2023",
    president: "João Henrique Blasi",
    dateRange: "2 de fevereiro de 2022 a 1º de novembro de 2023",
    members: members(`
Pedro Manoel Abreu
Cláudio Barreto Dutra
Luiz Cézar Medeiros
Sérgio Roberto Baasch Luz
Antônio do Rêgo Monteiro Rocha
Fernando Carioni
José Antônio Torres Marques
Salete Silva Sommariva
Ricardo Orofino da Luz Fontes
Salim Schead dos Santos
Maria do Rocio Luz Santa Ritta
Cid José Goulart Júnior
Alexandre d’lvanenko
Jaime Ramos
José Carlos Carstens Köhler
Sergio Izidoro Heil
João Henrique Blasi
Jorge Luiz de Borba
Rejane Andersen
Jânio de Souza Machado
Sônia Maria Schmitz
Soraya Nunes Lins
Jairo Fernandes Gonçalves
Raulino Jacó Brüning
Roberto Lucas Pacheco
Luiz Fernando Boller
Carlos Alberto Civinski
Paulo Roberto Sartorato
Túlio José Moura Pinheiro
Ricardo José Roesler
Robson Luz Varella
Sérgio Antônio Rizelo
Denise Volpato
Getúlio Corrêa
Sebastião César Evangelista
Carlos Adilson Silva
Ernani Guetten de Almeida
Rogério Mariano do Nascimento
Altamiro de Oliveira
Saul Steil
Selso de Oliveira
Newton Varella Júnior
Rodolfo Cezar Ribeiro da Silva Tridapalli
Leopoldo Augusto Brüggemann
Odson Cardoso Filho
Volnei Celso Tomazini
Gilberto Gomes de Oliveira
José Everaldo Silva
Júlio César Knoll
Paulo Henrique Moritz Martins da Silva
Vera Lúcia Ferreira Copetti
Cinthia Beatriz da Silva Bittencourt Schaefer
André Carvalho
André Luiz Dacol
Cláudia Lambert de Faria
Francisco José Rodrigues de Oliveira Neto
Guilherme Nunes Born
Jaime Machado Júnior
Janice Goulart Garcia Ubialli
Luiz Zanelato
Rubens Schulz
Dinart Francisco Machado
Eduardo Mattos Gallo Júnior
Gerson Cherem II
Hélio do Valle Pereira
Rosane Portella Wolff
Artur Jenichen Filho
Denise de Souza Luiz Francoski
Luiz César Schweitzer
Luiz Neri Oliveira de Souza
Norival Acácio Engel
Vilson Fontana
Hélio David Vieira Figueira dos Santos
José Agenor de Aragão
Júlio César Machado Ferreira de Melo
Sidney Eloy Dalabrida
Ariovaldo Rogério Ribeiro da Silva
Álvaro Luiz Pereira de Andrade
Hildemar Meneguzzi de Carvalho
Luiz Antônio Zanini Fornerolli
Antônio Zoldan da Veiga
Haidée Denise Grin
Carlos Roberto da Silva
Osmar Nunes Júnior
Luiz Felipe Siegert Schuch
José Maurício Lisboa
Bettina Maria Maresch de Moura
Ana Lia Barboza Moura Vieira Lisboa Carneiro
Flávio André Paz de Brum
Sandro José Neis
Diogo Nicolau Pítsica
Marcos Fey Probst
Sílvio Dagoberto Orsatto
Edir Josias Silveira Beck
Roberto Lepper
João Eduardo de Nadal
Márcio Rocha Cardoso
Osmar Mohr
Alex Heleno Santore
Fernanda Sell de Souto Goulart Fernandes
Stephan Klaus Radloff
`),
  },
  {
    period: "2020-2022",
    president: "Ricardo José Roesler",
    dateRange: "31 de janeiro de 2020 a 2 de fevereiro de 2022",
    members: members(`
Pedro Manoel Abreu
Cláudio Barreto Dutra
Luiz Cézar Medeiros
Sérgio Roberto Baasch Luz
Antônio do Rêgo Monteiro Rocha
Fernando Carioni
José Antônio Torres Marques
Marcus Túlio Sartorato
Salete Silva Sommariva
Ricardo Orofino da Luz Fontes
Salim Schead dos Santos
Maria do Rocio Luz Santa Ritta
Cid José Goulart Júnior
Alexandre d’lvanenko
Jaime Ramos
José Carlos Carstens Köhler
Moacyr de Moraes Lima Filho
Sergio Izidoro Heil
João Henrique Blasi
Jorge Luiz de Borba
Rejane Andersen
Jânio de Souza Machado
Henry Goy Petry Júnior
Sônia Maria Schmitz
Soraya Nunes Lins
Jairo Fernandes Gonçalves
Raulino Jacó Brüning
Roberto Lucas Pacheco
Luiz Fernando Boller
Ronei Danielli
Carlos Alberto Civinski
Paulo Roberto Sartorato
Túlio José Moura Pinheiro
Ricardo José Roesler
Robson Luz Varella
Rodrigo Tolentino de Carvalho Collaço
Sérgio Antônio Rizelo
Denise Volpato
Getúlio Corrêa
Sebastião César Evangelista
Carlos Adilson Silva
Ernani Guetten de Almeida
Rogério Mariano do Nascimento
Altamiro de Oliveira
Stanley da Silva Braga
Saul Steil
Selso de Oliveira
Newton Varella Júnior
Rodolfo Cezar Ribeiro da Silva Tridapalli
Leopoldo Augusto Brüggemann
Odson Cardoso Filho
Volnei Celso Tomazini
Gilberto Gomes de Oliveira
José Everaldo Silva
Júlio César Knoll
Paulo Henrique Moritz Martins da Silva
Vera Lúcia Ferreira Copetti
Cinthia Beatriz da Silva Bittencourt Schaefer
André Carvalho
André Luiz Dacol
Cláudia Lambert de Faria
Francisco José Rodrigues de Oliveira Neto
Guilherme Nunes Born
Jaime Machado Júnior
Janice Goulart Garcia Ubialli
Jorge Luís Costa Beber
Luiz Zanelato
Rubens Schulz
Dinart Francisco Machado
Eduardo Mattos Gallo Júnior
Gerson Cherem II
Hélio do Valle Pereira
Rosane Portella Wolff
Artur Jenichen Filho
Denise de Souza Luiz Francoski
Luiz César Schweitzer
Luiz Neri Oliveira de Souza
Norival Acácio Engel
Paulo Ricardo Bruschi
Vilson Fontana
Hélio David Vieira Figueira dos Santos
José Agenor de Aragão
Júlio César Machado Ferreira de Melo
Sidney Eloy Dalabrida
Ariovaldo Rogério Ribeiro da Silva
Álvaro Luiz Pereira de Andrade
Hildemar Meneguzzi de Carvalho
Luiz Antônio Zanini Fornerolli
Antônio Zoldan da Veiga
Haidée Denise Grin
Carlos Roberto da Silva
Osmar Nunes Júnior
Luiz Felipe Siegert Schuch
José Maurício Lisboa
Bettina Maria Maresch de Moura
Ana Lia Barboza Moura Vieira Lisboa Carneiro
Flávio André Paz de Brum
Sandro José Neis
Diogo Nicolau Pítsica
`),
  },
  {
    period: "2018-2020",
    president: "Rodrigo Tolentino de Carvalho Collaço",
    dateRange: "2 de fevereiro de 2018 a 31 de janeiro de 2020",
    members: members(`
Pedro Manoel Abreu
Cláudio Barreto Dutra
Newton Trisotto
Luiz Cézar Medeiros
Sérgio Roberto Baasch Luz
Antônio do Rêgo Monteiro Rocha
Fernando Carioni
José Antônio Torres Marques
Rui Francisco Barreiros Fortes
Marcus Túlio Sartorato
César Augusto Mimoso Ruiz de Abreu
Salete Silva Sommariva
Ricardo Orofino da Luz Fontes
Salim Schead dos Santos
Maria do Rocio Luz Santa Ritta
Cid José Goulart Júnior
Alexandre d’lvanenko
Jaime Ramos
Jorge Henrique Schaefer Martins
José Carlos Carstens Köhler
Lédio Rosa de Andrade
Moacyr de Moraes Lima Filho
Sergio Izidoro Heil
João Henrique Blasi
Jorge Luiz de Borba
Rejane Andersen
Joel Dias Figueira Júnior
Cláudio Valdyr Helfenstein
Jânio de Souza Machado
Henry Goy Petry Júnior
Sônia Maria Schmitz
Soraya Nunes Lins
Jairo Fernandes Gonçalves
Raulino Jacó Brüning
Roberto Lucas Pacheco
João Batista Góes Ulysséa
Luiz Fernando Boller
Ronei Danielli
Carlos Alberto Civinski
Paulo Roberto Sartorato
Túlio José Moura Pinheiro
Ricardo José Roesler
Robson Luz Varella
Ronaldo Moritz Martins da Silva
Sérgio Antônio Rizelo
Denise Volpato
Getúlio Corrêa
Sebastião César Evangelista
Carlos Adilson Silva
Ernani Guetten de Almeida
Rogério Mariano do Nascimento
Altamiro de Oliveira
Stanley da Silva Braga
Saul Steil
Selso de Oliveira
Newton Varella Júnior
Rodolfo Cezar Ribeiro da Silva Tridapalli
Leopoldo Augusto Brüggemann
Odson Cardoso Filho
Volnei Celso Tomazini
Gilberto Gomes de Oliveira
José Everaldo Silva
Júlio César Knoll
Paulo Henrique Moritz Martins da Silva
Vera Lúcia Ferreira Copetti
Cinthia Beatriz da Silva Bittencourt Schaefer
André Carvalho
André Luiz Dacol
Cláudia Lambert de Faria
Francisco José Rodrigues de Oliveira Neto
Guilherme Nunes Born
Jaime Machado Júnior
Janice Goulart Garcia Ubialli
Jorge Luís Costa Beber
Luiz Zanelato
Rubens Schulz
Dinart Francisco Machado
Eduardo Mattos Gallo Júnior
Gerson Cherem II
Hélio do Valle Pereira
Rosane Portella Wolff
Artur Jenichen Filho
Denise de Souza Luiz Francoski
Luiz César Schweitzer
Luiz Neri Oliveira de Souza
Norival Acácio Engel
Paulo Ricardo Bruschi
Vilson Fontana
Hélio David Vieira Figueira dos Santos
José Agenor de Aragão
Júlio César Machado Ferreira de Melo
Sidney Eloy Dalabrida
Ariovaldo Rogério Ribeiro da Silva
Álvaro Luiz Pereira de Andrade
Hildemar Meneguzzi de Carvalho
Luiz Antônio Zanini Fornerolli
Antônio Zoldan da Veiga
Haidée Denise Grin
Carlos Roberto da Silva
Osmar Nunes Júnior
Luiz Felipe Siegert Schuch
José Maurício Lisboa
`),
  },
  {
    period: "2016-2018",
    president: "José Antônio Torres Marques",
    dateRange: "29 de janeiro de 2016 a 2 de fevereiro de 2018",
    members: members(`
Pedro Manoel Abreu
Cláudio Barreto Dutra
Newton Trisotto
Luiz Cézar Medeiros
Eládio Torret Rocha
Nelson Juliano Schaefer Martins
Sérgio Roberto Baasch Luz
Antônio do Rêgo Monteiro Rocha
Fernando Carioni
José Antônio Torres Marques
Rui Francisco Barreiros Fortes
Marcus Túlio Sartorato
César Augusto Mimoso Ruiz de Abreu
Salete Silva Sommariva
Ricardo Orofino da Luz Fontes
Salim Schead dos Santos
Maria do Rocio Luz Santa Ritta
Cid José Goulart Júnior
Alexandre d’lvanenko
Jaime Ramos
Jorge Henrique Schaefer Martins
José Carlos Carstens Köhler
Lédio Rosa de Andrade
Marli Mosimann Vargas
Moacyr de Moraes Lima Filho
Sergio Izidoro Heil
João Henrique Blasi
Jorge Luiz de Borba
Rejane Andersen
Joel Dias Figueira Júnior
Cláudio Valdyr Helfenstein
Rodrigo Antônio da Cunha
Jânio de Souza Machado
Henry Goy Petry Júnior
Sônia Maria Schmitz
Soraya Nunes Lins
Jairo Fernandes Gonçalves
José Inácio Schaefer
Raulino Jacó Brüning
Roberto Lucas Pacheco
João Batista Góes Ulysséa
Luiz Fernando Boller
Ronei Danielli
Carlos Alberto Civinski
Paulo Roberto Sartorato
Túlio José Moura Pinheiro
Ricardo José Roesler
Robson Luz Varella
Ronaldo Moritz Martins da Silva
Rodrigo Tolentino de Carvalho Collaço
Sérgio Antônio Rizelo
Denise Volpato
Getúlio Corrêa
Sebastião César Evangelista
Domingos Paludo
Carlos Adilson Silva
Ernani Guetten de Almeida
Rogério Mariano do Nascimento
Edemar Gruber
Altamiro de Oliveira
Stanley da Silva Braga
Saul Steil
Newton Varella Júnior
Rodolfo Cezar Ribeiro da Silva Tridapalli
Leopoldo Augusto Brüggemann
Odson Cardoso Filho
Volnei Celso Tomazini
Gilberto Gomes de Oliveira
José Everaldo Silva
Júlio César Knoll
Paulo Henrique Moritz Martins da Silva
Vera Lúcia Ferreira Copetti
Cinthia Beatriz da Silva Bittencourt Schaefer
André Carvalho
André Luiz Dacol
Cláudia Lambert de Faria
Francisco José Rodrigues de Oliveira Neto
Guilherme Nunes Born
Jaime Machado Júnior
Janice Goulart Garcia Ubialli
Jorge Luís Costa Beber
Luiz Zanelato
Rubens Schulz
Dinart Francisco Machado
Eduardo Mattos Gallo Júnior
Gerson Cherem II
Hélio do Valle Pereira
Nelson Maia Peixoto
Rosane Portella Wolff
Artur Jenichen Filho
Denise de Souza Luiz Francoski
Luiz César Schweitzer
Luiz Neri Oliveira de Souza
Norival Acácio Engel
Paulo Ricardo Bruschi
Vilson Fontana
Hélio David Vieira Figueira dos Santos
José Agenor de Aragão
Júlio César Machado Ferreira de Melo
Sidney Eloy Dalabrida
`),
  },
  {
    period: "2014-2016",
    president: "Nelson Juliano Schaefer Martins",
    dateRange: "31 de janeiro de 2014 a 29 de janeiro de 2016",
    members: members(`
Carlos Prudêncio
José Gaspar Rubick
Pedro Manoel Abreu
José Trindade dos Santos
Cláudio Barreto Dutra
Newton Trisotto
Luiz Cézar Medeiros
Vanderlei Romer
Eládio Torret Rocha
José Volpato de Souza
Nelson Juliano Schaefer Martins
Sérgio Roberto Baasch Luz
Antônio do Rêgo Monteiro Rocha
Fernando Carioni
José Antônio Torres Marques
Rui Francisco Barreiros Fortes
Marcus Túlio Sartorato
César Augusto Mimoso Ruiz de Abreu
Salete Silva Sommariva
Ricardo Orofino da Luz Fontes
Salim Schead dos Santos
Maria do Rocio Luz Santa Ritta
Cid José Goulart Júnior
Alexandre d’lvanenko
Jaime Ramos
Jorge Henrique Schaefer Martins
José Carlos Carstens Köhler
Lédio Rosa de Andrade
Marli Mosimann Vargas
Moacyr de Moraes Lima Filho
Sergio Izidoro Heil
João Henrique Blasi
Jorge Luiz de Borba
Rejane Andersen
Victor José Sebem Ferreira
Joel Dias Figueira Júnior
Cláudio Valdyr Helfenstein
Rodrigo Antônio da Cunha
Jânio de Souza Machado
Henry Goy Petry Júnior
Paulo Roberto Camargo Costa
Sônia Maria Schmitz
Soraya Nunes Lins
Jairo Fernandes Gonçalves
José Inácio Schaefer
Raulino Jacó Brüning
Roberto Lucas Pacheco
João Batista Góes Ulysséa
Luiz Fernando Boller
Ronei Danielli
Carlos Alberto Civinski
Paulo Roberto Sartorato
Túlio José Moura Pinheiro
Ricardo José Roesler
Robson Luz Varella
Ronaldo Moritz Martins da Silva
Rodrigo Tolentino de Carvalho Collaço
Sérgio Antônio Rizelo
Denise Volpato
Getúlio Corrêa
Sebastião César Evangelista
Domingos Paludo
Carlos Adilson Silva
Ernani Guetten de Almeida
Rogério Mariano do Nascimento
Edemar Gruber
Altamiro de Oliveira
Stanley da Silva Braga
`),
  },
  {
    period: "2012-2014",
    president: "Cláudio Barreto Dutra",
    dateRange: "1º de fevereiro de 2012 a 31 de janeiro de 2014",
    members: members(`
Carlos Prudêncio
José Gaspar Rubick
Pedro Manoel Abreu
José Trindade dos Santos
Cláudio Barreto Dutra
Newton Trisotto
Sergio Torres Paladino
Solon D’Eça Neves
Luiz Cézar Medeiros
Vanderlei Romer
Eládio Torret Rocha
José Volpato de Souza
Nelson Juliano Schaefer Martins
Sérgio Roberto Baasch Luz
Antônio do Rêgo Monteiro Rocha
Fernando Carioni
José Antônio Torres Marques
Luiz Carlos Freyesleben
Rui Francisco Barreiros Fortes
Marcus Túlio Sartorato
César Augusto Mimoso Ruiz de Abreu
Salete Silva Sommariva
Ricardo Orofino da Luz Fontes
Salim Schead dos Santos
Maria do Rocio Luz Santa Ritta
Cid José Goulart Júnior
Hilton Cunha Junior
Alexandre d’lvanenko
Newton Janke
Jaime Ramos
Jorge Henrique Schaefer Martins
José Carlos Carstens Köhler
Lédio Rosa de Andrade
Marli Mosimann Vargas
Moacyr de Moraes Lima Filho
Sergio Izidoro Heil
João Henrique Blasi
Jorge Luiz de Borba
Rejane Andersen
Victor José Sebem Ferreira
Joel Dias Figueira Júnior
Cláudio Valdyr Helfenstein
Rodrigo Antônio da Cunha
Jânio de Souza Machado
Henry Goy Petry Júnior
Paulo Roberto Camargo Costa
Sônia Maria Schmitz
Soraya Nunes Lins
Jaime Luiz Vicari
Jairo Fernandes Gonçalves
José Inácio Schaefer
Raulino Jacó Brüning
Roberto Lucas Pacheco
João Batista Góes Ulysséa
Luiz Fernando Boller
Ronei Danielli
Carlos Alberto Civinski
Paulo Roberto Sartorato
Túlio José Moura Pinheiro
Ricardo José Roesler
Robson Luz Varella
Ronaldo Moritz Martins da Silva
Rodrigo Tolentino de Carvalho Collaço
Sérgio Antônio Rizelo
Denise Volpato
Getúlio Corrêa
Sebastião César Evangelista
`),
  },
  {
    period: "2010-2012",
    president: "José Trindade dos Santos",
    dateRange: "1º de fevereiro de 2010 a 1º de fevereiro de 2012",
    members: members(`
Carlos Prudêncio
José Gaspar Rubick
Pedro Manoel Abreu
José Trindade dos Santos
João Eduardo Souza Varella
Cláudio Barreto Dutra
Newton Trisotto
Sergio Torres Paladino
Solon D’Eça Neves
José Mazoni Ferreira
Irineu João da Silva
Luiz Cézar Medeiros
Volnei Ivo Carlin
Vanderlei Romer
Eládio Torret Rocha
José Volpato de Souza
Nelson Juliano Schaefer Martins
Sérgio Roberto Baasch Luz
Wilson Augusto do Nascimento
Antônio do Rêgo Monteiro Rocha
Fernando Carioni
José Antônio Torres Marques
Luiz Carlos Freyesleben
Rui Francisco Barreiros Fortes
Marco Aurélio Gastaldi Buzzi
Marcus Túlio Sartorato
César Augusto Mimoso Ruiz de Abreu
Salete Silva Sommariva
Ricardo Orofino da Luz Fontes
Salim Schead dos Santos
Maria do Rocio Luz Santa Ritta
Edson Nelson Ubaldo
Cid José Goulart Júnior
Hilton Cunha Junior
Alexandre d’lvanenko
Newton Janke
Jaime Ramos
Jorge Henrique Schaefer Martins
José Carlos Carstens Köhler
Lédio Rosa de Andrade
Marli Mosimann Vargas
Moacyr de Moraes Lima Filho
Sergio Izidoro Heil
João Henrique Blasi
Jorge Luiz de Borba
Rejane Andersen
Victor José Sebem Ferreira
Joel Dias Figueira Júnior
Cláudio Valdyr Helfenstein
Rodrigo Antônio da Cunha
Jânio de Souza Machado
Henry Goy Petry Júnior
Paulo Roberto Camargo Costa
Sônia Maria Schmitz
Soraya Nunes Lins
Jaime Luiz Vicari
Jairo Fernandes Gonçalves
José Inácio Schaefer
Raulino Jacó Brüning
Roberto Lucas Pacheco
João Batista Góes Ulysséa
Luiz Fernando Boller
Ronei Danielli
`),
  },
  {
    period: "2009-2010",
    president: "João Eduardo Souza Varella",
    dateRange: "13 de fevereiro de 2009 a 1º de fevereiro de 2010",
    members: members(`
Antônio Fernando do Amaral e Silva
Carlos Prudêncio
José Gaspar Rubick
Pedro Manoel Abreu
José Trindade dos Santos
João Eduardo Souza Varella
Cláudio Barreto Dutra
Newton Trisotto
Sergio Torres Paladino
Solon D’Eça Neves
José Mazoni Ferreira
Irineu João da Silva
Luiz Cézar Medeiros
Volnei Ivo Carlin
Vanderlei Romer
Eládio Torret Rocha
José Volpato de Souza
Nelson Juliano Schaefer Martins
Sérgio Roberto Baasch Luz
Wilson Augusto do Nascimento
Antônio do Rêgo Monteiro Rocha
Fernando Carioni
José Antônio Torres Marques
Luiz Carlos Freyesleben
Rui Francisco Barreiros Fortes
Marco Aurélio Gastaldi Buzzi
Marcus Túlio Sartorato
César Augusto Mimoso Ruiz de Abreu
Salete Silva Sommariva
Ricardo Orofino da Luz Fontes
Salim Schead dos Santos
Maria do Rocio Luz Santa Ritta
Edson Nelson Ubaldo
Cid José Goulart Júnior
Hilton Cunha Junior
Alexandre d’lvanenko
Newton Janke
Jaime Ramos
Jorge Henrique Schaefer Martins
José Carlos Carstens Köhler
Lédio Rosa de Andrade
Marli Mosimann Vargas
Moacyr de Moraes Lima Filho
Sergio Izidoro Heil
João Henrique Blasi
Jorge Luiz de Borba
Rejane Andersen
Victor José Sebem Ferreira
Joel Dias Figueira Júnior
Cláudio Valdyr Helfenstein
Rodrigo Antônio da Cunha
`),
  },
  {
    period: "2008-2009",
    president: "Francisco José Rodrigues de Oliveira Filho",
    dateRange: "1º de fevereiro de 2008 a 13 de fevereiro de 2009",
    members: members(`
Francisco José Rodrigues de Oliveira Filho
Alcides dos Santos Aguiar
Antônio Fernando do Amaral e Silva
Anselmo Cerello
Carlos Prudêncio
José Gaspar Rubick
Pedro Manoel Abreu
Orli de Ataíde Rodrigues
José Trindade dos Santos
João Eduardo Souza Varella
Cláudio Barreto Dutra
Newton Trisotto
Sergio Torres Paladino
Solon D’Eça Neves
José Mazoni Ferreira
Irineu João da Silva
Luiz Cézar Medeiros
Volnei Ivo Carlin
Vanderlei Romer
Eládio Torret Rocha
José Volpato de Souza
Nelson Juliano Schaefer Martins
Sérgio Roberto Baasch Luz
Wilson Augusto do Nascimento
Antônio do Rêgo Monteiro Rocha
Fernando Carioni
José Antônio Torres Marques
Luiz Carlos Freyesleben
Rui Francisco Barreiros Fortes
Marco Aurélio Gastaldi Buzzi
Marcus Túlio Sartorato
César Augusto Mimoso Ruiz de Abreu
Salete Silva Sommariva
Ricardo Orofino da Luz Fontes
Salim Schead dos Santos
Maria do Rocio Luz Santa Ritta
Edson Nelson Ubaldo
Cid José Goulart Júnior
Hilton Cunha Junior
Alexandre d’lvanenko
Newton Janke
Jaime Ramos
Jorge Henrique Schaefer Martins
José Carlos Carstens Köhler
Lédio Rosa de Andrade
Marli Mosimann Vargas
Moacyr de Moraes Lima Filho
Sergio Izidoro Heil
João Henrique Blasi
Jorge Luiz de Borba
Rejane Andersen
Victor José Sebem Ferreira
`),
  },
  {
    period: "2006-2008",
    president: "Pedro Manoel Abreu",
    dateRange: "1º de fevereiro de 2006 a 1º de fevereiro de 2008",
    members: members(`
Francisco José Rodrigues de Oliveira Filho
Alcides dos Santos Aguiar
Antônio Fernando do Amaral e Silva
Anselmo Cerello
Jorge Mussi
Carlos Prudêncio
José Gaspar Rubick
Pedro Manoel Abreu
Orli de Ataíde Rodrigues
José Trindade dos Santos
João Eduardo Souza Varella
Cláudio Barreto Dutra
Newton Trisotto
Sergio Torres Paladino
Solon D’Eça Neves
José Mazoni Ferreira
Irineu João da Silva
Luiz Cézar Medeiros
Volnei Ivo Carlin
Vanderlei Romer
Eládio Torret Rocha
José Volpato de Souza
Nelson Juliano Schaefer Martins
Sérgio Roberto Baasch Luz
Wilson Augusto do Nascimento
Antônio do Rêgo Monteiro Rocha
Fernando Carioni
José Antônio Torres Marques
Luiz Carlos Freyesleben
Rui Francisco Barreiros Fortes
Marco Aurélio Gastaldi Buzzi
Marcus Túlio Sartorato
César Augusto Mimoso Ruiz de Abreu
Salete Silva Sommariva
Ricardo Orofino da Luz Fontes
Nicanor Calírio da Silveira
Salim Schead dos Santos
Maria do Rocio Luz Santa Ritta
Edson Nelson Ubaldo
Cid José Goulart Júnior
Hilton Cunha Junior
Alexandre d’lvanenko
Newton Janke
Jaime Ramos
Jorge Henrique Schaefer Martins
José Carlos Carstens Köhler
Lédio Rosa de Andrade
Marli Mosimann Vargas
Moacyr de Moraes Lima Filho
Sergio Izidoro Heil
João Henrique Blasi
`),
  },
  {
    period: "2004-2006",
    president: "Jorge Mussi",
    dateRange: "2 de fevereiro de 2004 a 1º de fevereiro de 2006",
    members: members(`
Francisco José Rodrigues de Oliveira Filho
Alcides dos Santos Aguiar
Alberto Luiz da Costa
Antônio Fernando do Amaral e Silva
Anselmo Cerello
Jorge Mussi
Carlos Prudêncio
José Gaspar Rubick
Pedro Manoel Abreu
Orli de Ataíde Rodrigues
José Trindade dos Santos
João Eduardo Souza Varella
Carlos Alberto Silveira Lenzi
Cláudio Barreto Dutra
Newton Trisotto
Sergio Torres Paladino
Maurílio Moreira Leite
Solon D’Eça Neves
José Mazoni Ferreira
Irineu João da Silva
Luiz Cézar Medeiros
Volnei Ivo Carlin
Vanderlei Romer
Eládio Torret Rocha
José Volpato de Souza
Nelson Juliano Schaefer Martins
Sérgio Roberto Baasch Luz
Wilson Augusto do Nascimento
Antônio do Rêgo Monteiro Rocha
Fernando Carioni
José Antônio Torres Marques
Luiz Carlos Freyesleben
Rui Francisco Barreiros Fortes
Marco Aurélio Gastaldi Buzzi
Marcus Túlio Sartorato
César Augusto Mimoso Ruiz de Abreu
Salete Silva Sommariva
Ricardo Orofino da Luz Fontes
Nicanor Calírio da Silveira
Salim Schead dos Santos
Maria do Rocio Luz Santa Ritta
Edson Nelson Ubaldo
Cid José Goulart Júnior
`),
  },
  {
    period: "2002-2004",
    president: "Antônio Fernando do Amaral e Silva",
    dateRange: "1º de fevereiro de 2002 a 2 de fevereiro de 2004",
    members: members(`
João Martins
Wilson Guarany Vieira
Francisco José Rodrigues de Oliveira Filho
João José Ramos Schaefer
Alcides dos Santos Aguiar
Alberto Luiz da Costa
Antônio Fernando do Amaral e Silva
Anselmo Cerello
Genésio Nolli
Jorge Mussi
Carlos Prudêncio
José Gaspar Rubick
Pedro Manoel Abreu
Orli de Ataíde Rodrigues
José Trindade dos Santos
João Eduardo Souza Varella
Carlos Alberto Silveira Lenzi
Cláudio Barreto Dutra
Newton Trisotto
Sergio Torres Paladino
Maurílio Moreira Leite
Solon D’Eça Neves
José Mazoni Ferreira
Irineu João da Silva
Luiz Cézar Medeiros
Volnei Ivo Carlin
Ruy Pedro Schneider
Vanderlei Romer
Luiz Carlos Cercato Padilha
Eládio Torret Rocha
José Volpato de Souza
Nelson Juliano Schaefer Martins
Sérgio Roberto Baasch Luz
Wilson Augusto do Nascimento
Antônio do Rêgo Monteiro Rocha
Fernando Carioni
José Antônio Torres Marques
Luiz Carlos Freyesleben
Rui Francisco Barreiros Fortes
Marco Aurélio Gastaldi Buzzi
Marcus Túlio Sartorato
César Augusto Mimoso Ruiz de Abreu
Salete Silva Sommariva
Ricardo Orofino da Luz Fontes
Nicanor Calírio da Silveira
Salim Schead dos Santos
`),
  },
  {
    period: "2001-2002",
    president: "João José Ramos Schaefer",
    dateRange: "26 de novembro de 2001 a 1º de fevereiro de 2002",
    members: members(`
João Martins
Wilson Guarany Vieira
Francisco José Rodrigues de Oliveira Filho
João José Ramos Schaefer
Alcides dos Santos Aguiar
Alberto Luiz da Costa
Antônio Fernando do Amaral e Silva
Anselmo Cerello
Genésio Nolli
Jorge Mussi
Carlos Prudêncio
José Gaspar Rubick
Pedro Manoel Abreu
Orli de Ataíde Rodrigues
José Trindade dos Santos
João Eduardo Souza Varella
Carlos Alberto Silveira Lenzi
Cláudio Barreto Dutra
Newton Trisotto
Sergio Torres Paladino
Maurílio Moreira Leite
Solon D’Eça Neves
José Mazoni Ferreira
Irineu João da Silva
Luiz Cézar Medeiros
Volnei Ivo Carlin
Ruy Pedro Schneider
Vanderlei Romer
Luiz Carlos Cercato Padilha
Eládio Torret Rocha
José Volpato de Souza
Nelson Juliano Schaefer Martins
Sérgio Roberto Baasch Luz
Wilson Augusto do Nascimento
`),
  },
  {
    period: "2000-2001",
    president: "Francisco Xavier Medeiros Vieira",
    dateRange: "1º de fevereiro de 2000 a 26 de novembro de 2001",
    members: members(`
João Martins
Francisco Xavier Medeiros Vieira
Wilson Guarany Vieira
Francisco José Rodrigues de Oliveira Filho
João José Ramos Schaefer
Wilson Eder Graf
Alcides dos Santos Aguiar
José Roberge
Alberto Luiz da Costa
Antônio Fernando do Amaral e Silva
Álvaro Wandelli Filho
Anselmo Cerello
Genésio Nolli
Jorge Mussi
Francisco Borges
Carlos Prudêncio
José Gaspar Rubick
Pedro Manoel Abreu
Orli de Ataíde Rodrigues
José Trindade dos Santos
João Eduardo Souza Varella
Carlos Alberto Silveira Lenzi
Cláudio Barreto Dutra
Newton Trisotto
Sergio Torres Paladino
Maurílio Moreira Leite
Solon D’Eça Neves
José Mazoni Ferreira
Galvão Nery Caon
Irineu João da Silva
Luiz Cézar Medeiros
Volnei Ivo Carlin
Ruy Pedro Schneider
Vanderlei Romer
Luiz Carlos Cercato Padilha
`),
  },
  {
    period: "1998-2000",
    president: "João Martins",
    dateRange: "2 de fevereiro de 1998 a 1º de fevereiro de 2000",
    members: members(`
Napoleão Xavier do Amarante
João Martins
Francisco Xavier Medeiros Vieira
Wilson Guarany Vieira
Francisco José Rodrigues de Oliveira Filho
João José Ramos Schaefer
Wilson Eder Graf
Alcides dos Santos Aguiar
José Roberge
Alberto Luiz da Costa
Antônio Fernando do Amaral e Silva
Álvaro Wandelli Filho
Anselmo Cerello
Genésio Nolli
Jorge Mussi
Francisco Borges
Carlos Prudêncio
Paulo Benjamin Fragoso Gallotti
José Gaspar Rubick
Pedro Manoel Abreu
Orli de Ataíde Rodrigues
José Trindade dos Santos
João Eduardo Souza Varella
Carlos Alberto Silveira Lenzi
Cláudio Barreto Dutra
Newton Trisotto
Sergio Torres Paladino
Maurílio Moreira Leite
Solon D’Eça Neves
`),
  },
  {
    period: "1996-1998",
    president: "Napoleão Xavier do Amarante",
    dateRange: "1º de março de 1996 a 2 de fevereiro de 1998",
    members: members(`
Aloysio de Almeida Gonçalves
Tycho Brahe Fernandes Neto
Napoleão Xavier do Amarante
João Martins
Francisco Xavier Medeiros Vieira
Wilson Guarany Vieira
Rubem Odilon Antunes Córdova
Francisco José Rodrigues de Oliveira Filho
João José Ramos Schaefer
Nestor José da Silveira
Wilson Eder Graf
Alcides dos Santos Aguiar
José Roberge
Alberto Luiz da Costa
Antônio Fernando do Amaral e Silva
Cláudio Marques de Sousa
Álvaro Wandelli Filho
Anselmo Cerello
Genésio Nolli
Jorge Mussi
Francisco Borges
Carlos Prudêncio
Paulo Benjamin Fragoso Gallotti
José Gaspar Rubick
Pedro Manoel Abreu
Orli de Ataíde Rodrigues
José Trindade dos Santos
João Eduardo Souza Varella
Carlos Alberto Silveira Lenzi
Cláudio Barreto Dutra
Newton Trisotto
Sergio Torres Paladino
`),
  },
  {
    period: "1994-1996",
    president: "Tycho Brahe Fernandes Neto",
    dateRange: "1º de março de 1994 a 1º de março de 1996",
    members: members(`
Eduardo Pedro Carneiro da Cunha Luz
Ayres Gama Ferreira de Mello
Aloysio de Almeida Gonçalves
Tycho Brahe Fernandes Neto
Napoleão Xavier do Amarante
Nauro Luiz Guimarães Collaço
Ernani Palma Ribeiro
João Martins
Francisco Xavier Medeiros Vieira
Wilson Guarany Vieira
Rubem Odilon Antunes Córdova
Márcio Souza Batista da Silva
Francisco José Rodrigues de Oliveira Filho
João José Ramos Schaefer
Nestor José da Silveira
Wilson Eder Graf
Alcides dos Santos Aguiar
José Roberge
Rogério Domingos Farias Lemos
Alberto Luiz da Costa
Antônio Fernando do Amaral e Silva
Cláudio Marques de Sousa
Álvaro Wandelli Filho
Anselmo Cerello
Genésio Nolli
Jorge Mussi
Francisco Borges
Carlos Prudêncio
Erico Borges
Paulo Benjamin Fragoso Gallotti
José Gaspar Rubick
Pedro Manoel Abreu
Orli de Ataíde Rodrigues
José Trindade dos Santos
`),
  },
  {
    period: "1992-1994",
    president: "Aloysio de Almeida Gonçalves",
    dateRange: "6 de março de 1992 a 1º de março de 1994",
    members: members(`
Eduardo Pedro Carneiro da Cunha Luz
Ayres Gama Ferreira de Mello
Aloysio de Almeida Gonçalves
Tycho Brahe Fernandes Neto
Napoleão Xavier do Amarante
Nauro Luiz Guimarães Collaço
Ernani Palma Ribeiro
Protásio Leal Filho
João Martins
Francisco Xavier Medeiros Vieira
Wilson Guarany Vieira
Rubem Odilon Antunes Córdova
Márcio Souza Batista da Silva
Wladimir D’Ivanenko
Cid Caesar de Almeida Pedroso
Francisco José Rodrigues de Oliveira Filho
João José Ramos Schaefer
José Bonifácio da Silva
Nestor José da Silveira
Wilson Eder Graf
Alcides dos Santos Aguiar
José Roberge
Rogério Domingos Farias Lemos
Alberto Luiz da Costa
Antônio Fernando do Amaral e Silva
Cláudio Marques de Sousa
Álvaro Wandelli Filho
Anselmo Cerello
Genésio Nolli
Leonardo Alves Nunes
Jorge Mussi
Francisco Borges
`),
  },
  {
    period: "1990-1992",
    president: "Ayres Gama Ferreira de Mello",
    dateRange: "5 de março de 1990 a 6 de março de 1992",
    members: members(`
Eduardo Pedro Carneiro da Cunha Luz
Ayres Gama Ferreira de Mello
Thereza Grisólia Tang
Reynaldo Rodrigues Alves
Osny Caetano da Silva
Aloysio de Almeida Gonçalves
Tycho Brahe Fernandes Neto
Hélio de Melo Mosimann
Napoleão Xavier do Amarante
Nauro Luiz Guimarães Collaço
Ernani Palma Ribeiro
Protásio Leal Filho
João Martins
Francisco Xavier Medeiros Vieira
Wilson Guarany Vieira
Rubem Odilon Antunes Córdova
Norberto Ulysséa Ungaretti
Márcio Souza Batista da Silva
Wladimir D’Ivanenko
Cid Caesar de Almeida Pedroso
Francisco José Rodrigues de Oliveira Filho
João José Ramos Schaefer
José Bonifácio da Silva
Nestor José da Silveira
Wilson Eder Graf
Alcides dos Santos Aguiar
José Roberge
Rogério Domingos Farias Lemos
Alberto Luiz da Costa
Antônio Fernando do Amaral e Silva
Cláudio Marques de Sousa
`),
  },
  {
    period: "1989-1990",
    president: "Thereza Grisólia Tang",
    dateRange: "13 de dezembro de 1984 a 5 de março de 1990",
    members: members(`
Eduardo Pedro Carneiro da Cunha Luz
Ayres Gama Ferreira de Mello
Thereza Grisólia Tang
Reynaldo Rodrigues Alves
Osny Caetano da Silva
Aloysio de Almeida Gonçalves
Tycho Brahe Fernandes Neto
Hélio de Melo Mosimann
Napoleão Xavier do Amarante
Nauro Luiz Guimarães Collaço
Ernani Palma Ribeiro
Protásio Leal Filho
João Martins
Francisco Xavier Medeiros Vieira
Wilson Guarany Vieira
Rubem Odilon Antunes Córdova
Norberto Ulysséa Ungaretti
Márcio Souza Batista da Silva
Wladimir D’Ivanenko
Cid Caesar de Almeida Pedroso
Francisco José Rodrigues de Oliveira Filho
João José Ramos Schaefer
José Bonifácio da Silva
José Joaquim Lisboa
Nestor José da Silveira
Wilson Eder Graf
Raul Bayer Laus
`),
  },
  {
    period: "1988-1989",
    president: "Nelson Konrad",
    dateRange: "1º de março de 1988 a 13 de dezembro de 1989",
    members: members(`
Francisco May Filho
Eduardo Pedro Carneiro da Cunha Luz
Geraldo Gama Salles
Nelson Konrad
Ayres Gama Ferreira de Mello
Thereza Grisólia Tang
Reynaldo Rodrigues Alves
Osny Caetano da Silva
Aloysio de Almeida Gonçalves
Tycho Brahe Fernandes Neto
Hélio de Melo Mosimann
Napoleão Xavier do Amarante
Nauro Luiz Guimarães Collaço
Ernani Palma Ribeiro
Protásio Leal Filho
João Martins
Francisco Xavier Medeiros Vieira
Wilson Guarany Vieira
Rubem Odilon Antunes Córdova
Norberto Ulysséa Ungaretti
Márcio Souza Batista da Silva
Wladimir D’Ivanenko
Cid Caesar de Almeida Pedroso
Francisco José Rodrigues de Oliveira Filho
`),
  },
  {
    period: "1986-1988",
    president: "Geraldo Gama Salles",
    dateRange: "3 de março de 1986 a 1º de março de 1988",
    members: members(`
Francisco May Filho
Eduardo Pedro Carneiro da Cunha Luz
Geraldo Gama Salles
Nelson Konrad
Ayres Gama Ferreira de Mello
Thereza Grisólia Tang
Reynaldo Rodrigues Alves
Osny Caetano da Silva
Aloysio de Almeida Gonçalves
Tycho Brahe Fernandes Neto
Hélio de Melo Mosimann
Napoleão Xavier do Amarante
Nauro Luiz Guimarães Collaço
Ernani Palma Ribeiro
Protásio Leal Filho
João Martins
Francisco Xavier Medeiros Vieira
Wilson Guarany Vieira
Rubem Odilon Antunes Córdova
Norberto Ulysséa Ungaretti
Márcio Souza Batista da Silva
Wladimir D’Ivanenko
`),
  },
  {
    period: "1984-1986",
    president: "Eduardo Pedro Carneiro da Cunha Luz",
    dateRange: "1º de março de 1984 a 3 de março de 1986",
    members: members(`
Marcílio João da Silva Medeiros
Francisco May Filho
Eduardo Pedro Carneiro da Cunha Luz
Geraldo Gama Salles
Nelson Konrad
Rid Silva
Ayres Gama Ferreira de Mello
Thereza Grisólia Tang
Reynaldo Rodrigues Alves
Osny Caetano da Silva
Aloysio de Almeida Gonçalves
Tycho Brahe Fernandes Neto
Hélio de Melo Mosimann
Napoleão Xavier do Amarante
Nauro Luiz Guimarães Collaço
Ernani Palma Ribeiro
Protásio Leal Filho
João Martins
Francisco Xavier Medeiros Vieira
Wilson Guarany Vieira
Rubem Odilon Antunes Córdova
Norberto Ulysséa Ungaretti
Márcio Souza Batista da Silva
Wladimir D’Ivanenko
`),
  },
  {
    period: "1982-1984",
    president: "Francisco May Filho",
    dateRange: "1º de março de 1982 a 1º de março de de 1984",
    members: members(`
Marcílio João da Silva Medeiros
Eugênio Trompowsky Taulois Filho
Francisco May Filho
Eduardo Pedro Carneiro da Cunha Luz
Geraldo Gama Salles
Nelson Konrad
Rid Silva
Ayres Gama Ferreira de Mello
Thereza Grisólia Tang
Reynaldo Rodrigues Alves
Osny Caetano da Silva
Aloysio de Almeida Gonçalves
Wilson Vidal Antunes Sênior
Tycho Brahe Fernandes Neto
Hélio de Melo Mosimann
Napoleão Xavier do Amarante
Nauro Luiz Guimarães Collaço
Ernani Palma Ribeiro
Protásio Leal Filho
Aluizio Blasi
João Martins
Francisco Xavier Medeiros Vieira
Wilson Guarany Vieira
Rubem Odilon Antunes Córdova
`),
  },
  {
    period: "1980-1982",
    president: "Ivo Sell",
    dateRange: "13 de agosto de 1980 a 11 de fevereiro de 1982",
    members: members(`
Marcílio João da Silva Medeiros
Eugênio Trompowsky Taulois Filho
Francisco May Filho
Eduardo Pedro Carneiro da Cunha Luz
Geraldo Gama Salles
Ivo Sell
Nelson Konrad
Rid Silva
Ayres Gama Ferreira de Mello
Thereza Grisólia Tang
Reynaldo Rodrigues Alves
Osny Caetano da Silva
Aloysio de Almeida Gonçalves
Wilson Vidal Antunes Sênior
Tycho Brahe Fernandes Neto
Hélio de Melo Mosimann
Napoleão Xavier do Amarante
Nauro Luiz Guimarães Collaço
Ernani Palma Ribeiro
Heliodoro Franzoi
Protásio Leal Filho
Aluizio Blasi
João Martins
`),
  },
  {
    period: "1980",
    president: "Euclydes de Cerqueira Cintra",
    dateRange: "3 de março de 1980 a 13 de agosto de 1980",
    members: members(`
Marcílio João da Silva Medeiros
Eugênio Trompowsky Taulois Filho
João de Borba
Euclydes de Cerqueira Cintra
Aristeu Rui de Gouvêa Schiefler
Francisco May Filho
Eduardo Pedro Carneiro da Cunha Luz
Geraldo Gama Salles
Ivo Sell
Nelson Konrad
Rid Silva
Ayres Gama Ferreira de Mello
Thereza Grisólia Tang
Reynaldo Rodrigues Alves
Osny Caetano da Silva
Aloysio de Almeida Gonçalves
Wilson Vidal Antunes Sênior
Tycho Brahe Fernandes Neto
Hélio de Melo Mosimann
Napoleão Xavier do Amarante
Nauro Luiz Guimarães Collaço
Ernani Palma Ribeiro
Heliodoro Franzoi
`),
  },
  {
    period: "1978-1980",
    president: "João de Borba",
    dateRange: "1º de março de 1978 a 3 de março de 1980",
    members: members(`
Marcílio João da Silva Medeiros
Eugênio Trompowsky Taulois Filho
Ary Pereira Oliveira
João de Borba
Rubem Moritz da Costa
Euclydes de Cerqueira Cintra
Aristeu Rui de Gouvêa Schiefler
Francisco May Filho
Eduardo Pedro Carneiro da Cunha Luz
Geraldo Gama Salles
Ivo Sell
Nelson Konrad
Rid Silva
Ayres Gama Ferreira de Mello
Thereza Grisólia Tang
Reynaldo Rodrigues Alves
Osny Caetano da Silva
Aloysio de Almeida Gonçalves
Wilson Vidal Antunes Sênior
Tycho Brahe Fernandes Neto
Hélio Veiga Magalhães
Hélio de Melo Mosimann
Napoleão Xavier do Amarante
Nauro Luiz Guimarães Collaço
Ernani Palma Ribeiro
`),
  },
  {
    period: "1976-1978",
    president: "Ary Pereira Oliveira",
    dateRange: "1º de março de 1976 a 1º de março de 1978",
    members: members(`
Marcílio João da Silva Medeiros
Eugênio Trompowsky Taulois Filho
Ary Pereira Oliveira
João de Borba
Rubem Moritz da Costa
Euclydes de Cerqueira Cintra
Aristeu Rui de Gouvêa Schiefler
Francisco May Filho
Eduardo Pedro Carneiro da Cunha Luz
Geraldo Gama Salles
Ivo Sell
Nelson Konrad
Rid Silva
Ayres Gama Ferreira de Mello
Thereza Grisólia Tang
Reynaldo Rodrigues Alves
Osny Caetano da Silva
`),
  },
  {
    period: "1974-1976",
    president: "Eugênio Trompowsky Taulois Filho",
    dateRange: "1º de março de 1974 a 1º de março de 1976",
    members: members(`
Paulo Peregrino Ferreira
Severino Nicomedes Alves Pedrosa
Belisário Ramos da Costa
Marcílio João da Silva Medeiros
Norberto de Miranda Ramos
Eugênio Trompowsky Taulois Filho
Ary Pereira Oliveira
João de Borba
Rubem Moritz da Costa
Euclydes de Cerqueira Cintra
Aristeu Rui de Gouvêa Schiefler
Francisco May Filho
Eduardo Pedro Carneiro da Cunha Luz
Geraldo Gama Salles
Ivo Sell
Waldyr Pederneiras Taulois
Nelson Konrad
Rid Silva
Ayres Gama Ferreira de Mello
Thereza Grisólia Tang
`),
  },
  {
    period: "1972-1974",
    president: "Norberto de Miranda Ramos",
    dateRange: "1º de março de 1972 a 1º de março de 1974",
    members: members(`
Severino Nicomedes Alves Pedrosa
Belisário Ramos da Costa
Marcílio João da Silva Medeiros
Norberto de Miranda Ramos
Eugênio Trompowsky Taulois Filho
Ary Pereira Oliveira
João de Borba
Rubem Moritz da Costa
Euclydes de Cerqueira Cintra
Aristeu Rui de Gouvêa Schiefler
Oswaldo Arêas Hörn
Francisco May Filho
Eduardo Pedro Carneiro da Cunha Luz
Geraldo Gama Salles
Ivo Sell
Waldyr Pederneiras Taulois
Nelson Konrad
`),
  },
  {
    period: "1970-1972",
    president: "Marcílio João da Silva Medeiros",
    dateRange: "2 de março de 1970 a 1º de março de 1972",
    members: members(`
Osmundo Wanderley da Nóbrega
Severino Nicomedes Alves Pedrosa
Adão Bernardes
Marcílio João da Silva Medeiros
Norberto de Miranda Ramos
Eugênio Trompowsky Taulois Filho
Ary Pereira Oliveira
João de Borba
Rubem Moritz da Costa
Euclydes de Cerqueira Cintra
Aristeu Rui de Gouvêa Schiefler
Belisário José Nogueira Ramos
Francisco José Rodrigues de Oliveira
Oswaldo Arêas Hörn
Francisco May Filho
`),
  },
  {
    period: "1968-1970",
    president: "Adão Bernardes",
    dateRange: "1º de março de 1968 a 1º de março de 1970",
    members: members(`
Osmundo Wanderley da Nóbrega
Severino Nicomedes Alves Pedrosa
Belisário Ramos da Costa
Adão Bernardes
Marcílio João da Silva Medeiros
Norberto de Miranda Ramos
Eugênio Trompowsky Taulois Filho
Ary Pereira Oliveira
João de Borba
Rubem Moritz da Costa
Euclydes de Cerqueira Cintra
Aristeu Rui de Gouvêa Schiefler
`),
  },
  {
    period: "1966-1968",
    president: "Belisário Ramos da Costa",
    dateRange: "1º de março de 1966 a 1º de março de 1968",
    members: members(`
Osmundo Wanderley da Nóbrega
Severino Nicomedes Alves Pedrosa
Arno Pedro Hoeschl
Ivo Guilhon Pereira de Mello
Belisário Ramos da Costa
Adão Bernardes
Vitor Lima
Marcílio João da Silva Medeiros
Norberto de Miranda Ramos
Eugênio Trompowsky Taulois Filho
Ary Pereira Oliveira
João de Borba
Rubem Moritz da Costa
`),
  },
  {
    period: "1964-1966",
    president: "Ivo Guilhon Pereira de Mello",
    dateRange: "2 de janeiro de 1964 a 1º de março de 1966",
    members: members(`
Osmundo Wanderley da Nóbrega
Severino Nicomedes Alves Pedrosa
Arno Pedro Hoeschl
Ivo Guilhon Pereira de Mello
Belisário Ramos da Costa
Adão Bernardes
Vitor Lima
Marcílio João da Silva Medeiros
Norberto de Miranda Ramos
Eugênio Trompowsky Taulois Filho
`),
  },
  {
    period: "1962-1964",
    president: "Arno Pedro Hoeschl",
    dateRange: "2 de janeiro de 1962 a 2 de janeiro de 1964",
    members: members(`
Osmundo Wanderley da Nóbrega
Severino Nicomedes Alves Pedrosa
Arno Pedro Hoeschl
Ivo Guilhon Pereira de Mello
Belisário Ramos da Costa
Adão Bernardes
Vitor Lima
Marcílio João da Silva Medeiros
Manoel Barbosa de Lacerda
Norberto de Miranda Ramos
Eugênio Trompowsky Taulois Filho
`),
  },
  {
    period: "1960-1962",
    president: "Severino Nicomedes Alves Pedrosa",
    dateRange: "2 de janeiro de 1960 a 2 de janeiro de 1962",
    members: members(`
Hercílio João da Silva Medeiros
Osmundo Wanderley da Nóbrega
Severino Nicomedes Alves Pedrosa
Arno Pedro Hoeschl
Maurillo da Costa Coimbra
Ivo Guilhon Pereira de Mello
Belisário Ramos da Costa
Adão Bernardes
Vitor Lima
Marcílio João da Silva Medeiros
José do Patrocínio Gallotti
Manoel Barbosa de Lacerda
Norberto de Miranda Ramos
`),
  },
  {
    period: "1958-1960",
    president: "Osmundo Wanderley da Nóbrega",
    dateRange: "2 de janeiro de 1958 a 2 de janeiro de 1960",
    members: members(`
Hercílio João da Silva Medeiros
Osmundo Wanderley da Nóbrega
Severino Nicomedes Alves Pedrosa
Arno Pedro Hoeschl
Maurillo da Costa Coimbra
Ivo Guilhon Pereira de Mello
Belisário Ramos da Costa
Adão Bernardes
Vitor Lima
José do Patrocínio Gallotti
`),
  },
  {
    period: "1956-1958",
    president: "José Rocha Ferreira Bastos",
    dateRange: "2 de janeiro de 1956 a 2 de janeiro de 1958",
    members: members(`
José Rocha Ferreira Bastos
Hercílio João da Silva Medeiros
Osmundo Wanderley da Nóbrega
Severino Nicomedes Alves Pedrosa
Arno Pedro Hoeschl
Maurillo da Costa Coimbra
Ivo Guilhon Pereira de Mello
Belisário Ramos da Costa
Adão Bernardes
Vitor Lima
José do Patrocínio Gallotti
`),
  },
  {
    period: "1952-1956",
    president: "Guilherme Luiz Abry",
    dateRange: "1º de março de 1952 a 2 de fevereiro de 1956",
    members: members(`
Guilherme Luiz Abry
José Rocha Ferreira Bastos
Flávio Tavares da Cunha Mello
Hercílio João da Silva Medeiros
Osmundo Wanderley da Nóbrega
Nelson Nunes de Souza Guimarães
Severino Nicomedes Alves Pedrosa
Arno Pedro Hoeschl
Oscar Leitão
Maurillo da Costa Coimbra
Edgard de Lima Pedreira
Ivo Guilhon Pereira de Mello
Belisário Ramos da Costa
`),
  },
  {
    period: "1947-1952",
    president: "Urbano Müller Salles",
    dateRange: "18 de janeiro de 1947 a 16 de fevereiro de 1952",
    members: members(`
Urbano Müller Salles
Alfredo von Trompowsky
Guilherme Luiz Abry
Alcibíades Valério Silveira de Souza
João de Luna Freire
José Rocha Ferreira Bastos
Flávio Tavares da Cunha Mello
Hercílio João da Silva Medeiros
Osmundo Wanderley da Nóbrega
Nelson Nunes de Souza Guimarães
Adalberto Belisário Ramos
Severino Nicomedes Alves Pedrosa
Edgard de Lima Pedreira
`),
  },
  {
    period: "1942-1947",
    president: "João da Silva Medeiros Filho",
    dateRange: "2 de janeiro de 1942 a 18 de janeiro de 1947",
    members: members(`
João da Silva Medeiros Filho
Gil Costa
Érico Ennes Torres
Urbano Müller Salles
Alfredo von Trompowsky
Henrique da Silva Fontes
Guilherme Luiz Abry
Joaquim Luiz Guedes Pinto
Alcibíades Valério Silveira de Souza
João de Luna Freire
Mário Teixeira Carrilho
José Rocha Ferreira Bastos
Flávio Tavares da Cunha Mello
Edgard de Lima Pedreira
`),
  },
  {
    period: "1936-1942",
    president: "Érico Ennes Torres",
    dateRange: "1º de janeiro de 1936 a 2 de janeiro de 1942",
    members: members(`
Francisco Tavares da Cunha Mello Sobrinho
João da Silva Medeiros Filho
Gil Costa
João Pedro da Silva
Heráclito Carneiro Ribeiro
Américo da Silveira Nunes
Gustavo de Toledo Piza
Érico Ennes Torres
Urbano Müller Salles
Alfredo von Trompowsky
Marinho Parísio de Sousa Lobo
Henrique da Silva Fontes
Guilherme Luiz Abry
Mileto Tavares da Cunha Barreto
Joaquim Luiz Guedes Pinto
Lucas Bhering
Alcibíades Valério Silveira de Souza
`),
  },
  {
    period: "1932-1936",
    president: "Gustavo de Toledo Piza",
    dateRange: "8 de março de 1932 a 1º de janeiro de 1936",
    members: members(`
Manoel Cavalcante de Arruda Câmara
Sálvio de Sá Gonzaga
Francisco Tavares da Cunha Mello Sobrinho
João da Silva Medeiros Filho
Gil Costa
João Pedro da Silva
José Arthur Boiteux
Heráclito Carneiro Ribeiro
Américo da Silveira Nunes
Gustavo de Toledo Piza
Érico Ennes Torres
Urbano Müller Salles
Alfredo von Trompowsky
Marinho Parísio de Sousa Lobo
`),
  },
  {
    period: "1931-1932",
    president: "Heráclito Carneiro Ribeiro",
    dateRange: "13 de maio de 1931 a 8 de março de 1932",
    members: members(`
Manoel Cavalcante de Arruda Câmara
Sálvio de Sá Gonzaga
Honório Hermetto Carneiro da Cunha
Francisco Tavares da Cunha Mello Sobrinho
João da Silva Medeiros Filho
Gil Costa
João Pedro da Silva
José Arthur Boiteux
Heráclito Carneiro Ribeiro
Américo da Silveira Nunes
Gustavo de Toledo Piza
Érico Ennes Torres
Urbano Müller Salles
`),
  },
  {
    period: "1925-1931",
    president: "Francisco Tavares da Cunha Mello Sobrinho",
    dateRange: "18 de dezembro de 1925 a 13 de maio de 1931",
    members: members(`
Manoel Cavalcante de Arruda Câmara
Sálvio de Sá Gonzaga
Ayres de Albuquerque Gama
Honório Hermetto Carneiro da Cunha
Francisco Tavares da Cunha Mello Sobrinho
João da Silva Medeiros Filho
Gil Costa
João Pedro da Silva
Antônio Gomes Ramagem
José Arthur Boiteux
Heráclito Carneiro Ribeiro
Américo da Silveira Nunes
Gustavo de Toledo Piza
Érico Ennes Torres
Urbano Müller Salles
`),
  },
  {
    period: "1920-1925",
    president: "João da Silva Medeiros Filho",
    dateRange: "17 de dezembro de 1920 a 18 de dezembro de 1925",
    members: members(`
Manoel Cavalcante de Arruda Câmara
Sálvio de Sá Gonzaga
Ayres de Albuquerque Gama
Honório Hermetto Carneiro da Cunha
Francisco Tavares da Cunha Mello Sobrinho
João da Silva Medeiros Filho
Gil Costa
João Pedro da Silva
Antônio Gomes Ramagem
José Arthur Boiteux
Heráclito Carneiro Ribeiro
Américo da Silveira Nunes
`),
  },
  {
    period: "1917-1920",
    president: "Vasco de Albuquerque Gama",
    dateRange: "18 de dezembro de 1917 a 17 de dezembro de 1920",
    members: members(`
Manoel Cavalcante de Arruda Câmara
Vasco de Albuquerque Gama
Sálvio de Sá Gonzaga
Ayres de Albuquerque Gama
Honório Hermetto Carneiro da Cunha
Francisco Tavares da Cunha Mello Sobrinho
João da Silva Medeiros Filho
Gil Costa
João Pedro da Silva
Antônio Gomes Ramagem
`),
  },
  {
    period: "1913-1917",
    president: "Antônio Wanderley Navarro Pereira Lins",
    dateRange: "19 de dezembro de 1913 a 18 de dezembro de 1917",
    members: members(`
Manoel Cavalcante de Arruda Câmara
Vasco de Albuquerque Gama
Antônio Wanderley Navarro Pereira Lins
Sálvio de Sá Gonzaga
Ayres de Albuquerque Gama
Honório Hermetto Carneiro da Cunha
Francisco Tavares da Cunha Mello Sobrinho
`),
  },
  {
    period: "1910-1913",
    president: "Vasco de Albuquerque Gama",
    dateRange: "20 de maio de 1910 a 19 de dezembro de 1913",
    members: members(`
Manoel Cavalcante de Arruda Câmara
Vasco de Albuquerque Gama
Antônio Wanderley Navarro Pereira Lins
Sálvio de Sá Gonzaga
Ayres de Albuquerque Gama
Honório Hermetto Carneiro da Cunha
`),
  },
  {
    period: "1910",
    president: "Felisberto Elysio Bezerra Montenegro",
    dateRange: "4 de janeiro de 1910 a 11 de fevereiro de 1910",
    members: members(`
Antero Francisco de Assis
Felisberto Elysio Bezerra Montenegro
Manoel Cavalcante de Arruda Câmara
Vasco de Albuquerque Gama
Antônio Wanderley Navarro Pereira Lins
`),
  },
  {
    period: "1902-1910",
    president: "Domingos Pacheco d'Avila",
    dateRange: "21 de outubro de 1902 a 4 de janeiro de 1910",
    members: members(`
Domingos Pacheco d’Avila
Antero Francisco de Assis
Felisberto Elysio Bezerra Montenegro
Manoel Cavalcante de Arruda Câmara
Vasco de Albuquerque Gama
Antônio Wanderley Navarro Pereira Lins
`),
  },
  {
    period: "1900-1902",
    president: "Antero Francisco de Assis",
    dateRange: "6 de fevereiro de 1900 a 20 de outubro de 1902",
    members: members(`
José Roberto Vianna Guilhon
Domingos Pacheco d’Avila
Genuino Firmino Vidal Capistrano
Antero Francisco de Assis
Felisberto Elysio Bezerra Montenegro
Manoel Cavalcante de Arruda Câmara
José Virgolino Correia de Queiroz
Vasco de Albuquerque Gama
`),
  },
  {
    period: "1894-1900",
    president: "José Roberto Vianna Guilhon",
    dateRange: "22 de abril de 1894 a 6 de fevereiro de 1900",
    members: members(`
Edelberto Licínio da Costa Campello
Francisco da Cunha Machado Beltrão
José Roberto Vianna Guilhon
Domingos Pacheco d’Avila
José Ferreira de Mello
Francisco Antônio Vieira Caldas
Genuino Firmino Vidal Capistrano
Antero Francisco de Assis
Felisberto Elysio Bezerra Montenegro
`),
  },
  {
    period: "1893-1894",
    president: "José Ferreira de Mello",
    dateRange: "10 de abril de 1893 a 22 de abril de 1894",
    members: members(`
José Ferreira de Mello
Francisco Antônio Vieira Caldas
Pedro dos Reys Gordilho
Umbelino de Souza Marinho
Antônio Geraldo Teixeira
`),
  },
  {
    period: "1891-1893",
    president: "José Roberto Vianna Guilhon",
    dateRange: "1º de outubro de 1891 a 8 de abril de 1893",
    members: members(`
Edelberto Licínio da Costa Campello
Francisco da Cunha Machado Beltrão
José Elysio de Carvalho Couto
José Roberto Vianna Guilhon
Domingos Pacheco d’Avila
José Ferreira de Mello
`),
  },
];

export const compositionTerms: CompositionTerm[] = compositionSeed.map((term) => ({
  ...term,
  imageUrl: `/images/composicao/gestao-${term.period}.jpg`,
  imageAlt: `Retrato de ${term.president}`,
  sourceUrl: `${sourceBaseUrl}/gestao-${term.period}`,
}));
