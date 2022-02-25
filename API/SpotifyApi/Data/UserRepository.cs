using SpotifyApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SpotifyApi.Data
{
    public class UserRepository: IUserRepository
    {
        private readonly DataBaseContext _context= new DataBaseContext();

        public UserRepository()
        {
        }

        public UserRepository(DataBaseContext context)
        {
            _context = context;
        }
        public User Create(User newUser)
        {
                _context.Users.Add(newUser);
                newUser.Id = _context.SaveChanges();
 

            return newUser;
        }

        public User GetById(int id)
        {
            return _context.Users.FirstOrDefault(user => user.Id == id);
        }

        public User GetByName(string Name)
        {
            return _context.Users.FirstOrDefault(user => user.Name == Name);
        }
    }
}
