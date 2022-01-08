#nullable disable
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TransferHelper.Data;
using TransferHelper.Models;

namespace TransferHelper.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PlayerPositionsController : ControllerBase
    {
        private readonly DataContext _context;

        public PlayerPositionsController(DataContext context)
        {
            _context = context;
        }

        // GET: api/PlayerPositions
        [HttpGet(Name = "[action]")]
        public async Task<ActionResult<IEnumerable<PlayerPosition>>> GetPlayerPositions()
        {
            return await _context.PlayerPositions.ToListAsync();
        }

        // GET: api/PlayerPositions/5
        [HttpGet("{id}", Name = "[action]")]
        public async Task<ActionResult<PlayerPosition>> GetPlayerPosition(Guid id)
        {
            var playerPosition = await _context.PlayerPositions.FindAsync(id);

            if (playerPosition == null)
            {
                return NotFound();
            }

            return playerPosition;
        }

        // PUT: api/PlayerPositions/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}", Name = "[action]")]
        public async Task<IActionResult> PutPlayerPosition(Guid id, PlayerPosition playerPosition)
        {
            if (id != playerPosition.Id)
            {
                return BadRequest();
            }

            _context.Entry(playerPosition).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PlayerPositionExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/PlayerPositions
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost(Name = "[action]")]
        public async Task<ActionResult<PlayerPosition>> PostPlayerPosition(PlayerPosition playerPosition)
        {
            _context.PlayerPositions.Add(playerPosition);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetPlayerPosition", new { id = playerPosition.Id }, playerPosition);
        }

        // DELETE: api/PlayerPositions/5
        [HttpDelete("{id}", Name = "[action]")]
        public async Task<IActionResult> DeletePlayerPosition(Guid id)
        {
            var playerPosition = await _context.PlayerPositions.FindAsync(id);
            if (playerPosition == null)
            {
                return NotFound();
            }

            _context.PlayerPositions.Remove(playerPosition);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool PlayerPositionExists(Guid id)
        {
            return _context.PlayerPositions.Any(e => e.Id == id);
        }
    }
}
