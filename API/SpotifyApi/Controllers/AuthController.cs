﻿using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SpotifyApi.Data;
using SpotifyApi.Dtos;
using SpotifyApi.Helpers;
using SpotifyApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SpotifyApi.Controllers
{
    [Route("api")]
    [ApiController]
    
    public class AuthController : Controller
    {
        private readonly IUserRepository _repository;
        private readonly JwtService _jwtService;

        public AuthController(IUserRepository repository, JwtService jwtService)
        {
            _repository = repository;
            _jwtService = jwtService;
        }


        [HttpPost("register")]
        public IActionResult Register(RegisterDto registerDto)
        {
            var user = new User
            {
                Name = registerDto.Name,
                Email = registerDto.Email,
                Password= registerDto.Password
            };
            _repository.Create(user);

            return Created("succes",user);
        }
        [HttpPost("login")]
        public IActionResult Login(LoginDto loginDto)
        {
            var user = _repository.GetByName(loginDto.Name);

            if (user == null)
            {
                return BadRequest(new { message = "Invalid Credentials" });
                
            }
            if (user.Password!=loginDto.Password )
            {
                return BadRequest(new { message = "Invalid Credentials" });
            }

            var jwt = _jwtService.Generate(user.Id);

            Response.Cookies.Append("jwt", jwt, new CookieOptions
            {
                HttpOnly = true

            });
            return Ok(new {jwt});

        }

        [HttpGet("user")]
        public IActionResult User()
        {
            try
            {
                var jwt =Request.Cookies["jwt"];

                var token = _jwtService.Verify(jwt);

                int userId = int.Parse(token.Issuer);

                var user = _repository.GetById(userId);

                return Ok(user);
            }
            catch (Exception e)
            {
                return Unauthorized(e.Message);
            }
            


        }

        [HttpPost("logout")]
        public IActionResult Logout()
        {
            Response.Cookies.Delete("jwt");
            return Ok("Logged out");
        }

            
    }
}
