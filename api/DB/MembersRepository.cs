using System;
using System.Collections.Generic;
using System.Linq;

using EzraTest.Models;

using Microsoft.Data.Sqlite;

namespace EzraTest.DB
{
    public class MembersRepository : IMembersRepository
    {
        private string _connectionString;

        public MembersRepository(string connectionString)
        {
            _connectionString = $"Data Source={connectionString}";
        }

        /// <inheritdoc />
        public IEnumerable<Member> GetMembers()
        {
            return ExecuteQuery("SELECT * FROM MEMBERS", (reader) =>
            {
                return new Member
                {
                    Id = reader.GetGuid(0),
                    Name = reader.GetString(1),
                    Email = reader.GetString(2)
                };
            });
        }

        /// <inheritdoc />
        public Member GetMember(Guid id)
        {
            return ExecuteQuery($"SELECT * FROM MEMBERS WHERE Id = '{id.ToString("N")}'", (reader) =>
            {
                return new Member
                {
                    Id = Guid.Parse(reader.GetString(0)),
                    Name = reader.GetString(1),
                    Email = reader.GetString(2)
                };
            }).FirstOrDefault();
        }

        /// <inheritdoc />
        public int AddMember(Member member)
        {
            // (DONE) TODO
            return this.ExecuteNonQuery($"INSERT INTO MEMBERS (ID, NAME, EMAIL) VALUES ('{member.Id.ToString("N")}', '{member.Name}', '{member.Email}')");
        }

        /// <inheritdoc />
        public int UpdateMember(Member member)
        {
            // (DONE) TODO
            return this.ExecuteNonQuery($"UPDATE MEMBERS SET NAME = '{member.Name}', EMAIL = '{member.Email}' WHERE ID = '{member.Id.ToString("N")}'");
        }

        /// <inheritdoc />
        public int DeleteMember(Guid id)
        {
            // (DONE) TODO
            return this.ExecuteNonQuery($"DELETE FROM MEMBERS WHERE ID = '{id.ToString("N")}'");
        }

        private IEnumerable<T> ExecuteQuery<T>(string commandText, Func<SqliteDataReader, T> func)
        {
            using (var connection = new SqliteConnection(_connectionString))
            {
                connection.Open();

                var command = connection.CreateCommand();
                command.CommandText = commandText;

                using (var reader = command.ExecuteReader())
                {
                    while (reader.Read())
                    {
                        yield return func(reader);
                    }
                }
            }
        }

        private int ExecuteNonQuery(string commandText)
        {
            using (var connection = new SqliteConnection(_connectionString))
            {
                connection.Open();

                var command = connection.CreateCommand();
                command.CommandText = commandText;
                return command.ExecuteNonQuery();
            }
        }
    }
}