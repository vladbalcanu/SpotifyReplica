using SpotifyApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SpotifyApi.Data
{
    public interface IUserRepository
    {
        User Create(User user);
        User GetByName(string Name);

        User GetById(int id);
    }
}
