/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("users").del();
  await knex("users").insert([
    { name: "Akon", email: "akon@gmail.com", password: "123" },
    { name: "Bkon", email: "bkon@gmail.com", password: "123" },
    { name: "Ckon", email: "ckon@gmail.com", password: "123" },
  ]);
};
