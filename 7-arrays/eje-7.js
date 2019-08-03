'use strict';

let adalabers = [
  {
    name: "María",
    age: 29,
    career: "diseñadora",
  },
  {
    name: "Lucía",
    age: 31,
    career: "ingeniera",
  },
  {
    name: "Susana",
    age: 34,
    career: "periodista",
  },
  {
    name: "Rocío",
    age: 25,
    career: "actriz",
  },
  {
    name: "Inma",
    age: 29,
    career: "diseñadora",
  },
  {
    name: "Inma",
    age: 29,
    career: "diseñadora",
  },
  {
    name: "Inma",
    age: 29,
    career: "diseñadora",
  },
  {
    name: "Inma",
    age: 29,
    career: "diseñadora",
  },
  {
    name: "Inma",
    age: 29,
    career: "diseñadora",
  },
]

function countAdalabers() {
  return adalabers.length;
}

function averageAge() {
  let ageMedia = 0;
  for (const ada of adalabers) {
    ageMedia = ageMedia + ada.age;
  }
  return ageMedia / adalabers.length;
}

function theYoungest() {
  let youngest;
  for (const ada of adalabers) {
    if (!youngest || youngest.age > ada.age) {
      youngest = ada;
    }
  }
  return youngest.name;
}

function countDesigners() {
  let designers = 0;
  for (const ada of adalabers) {
    if (ada.career === "diseñadora") {
      designers ++;
    }
  }
  return designers;
}