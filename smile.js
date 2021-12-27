module.exports = {
    name: 's!smile',
    aliases: ['s!smile', 's!Smile'],
    run: async (client, message) => {
        const smile = [
            'https://i.pinimg.com/736x/96/84/79/96847984cd5c9943d1729f452ba68b99.jpg',
            'https://i.pinimg.com/736x/2f/27/e0/2f27e00c1ba417f7d82cb45741bbb5da.jpg',
            'https://i.pinimg.com/736x/f4/0e/a9/f40ea974e15444346c424657b2614f73.jpg',
            'https://i.pinimg.com/736x/5d/8e/e6/5d8ee659ddcba24aa1068dadf617908b.jpg',
            'https://i.pinimg.com/736x/a9/bf/73/a9bf735edbb82d4a5e4cdea222337533.jpg',
            'https://i.pinimg.com/736x/b8/be/73/b8be73a269cb9fcd1968317e212d3df2.jpg',
            'https://i.pinimg.com/736x/d9/8f/33/d98f3350ff21bf36e641406d9e127b15.jpg',
            'https://i.pinimg.com/736x/06/1c/de/061cdef03a34236d18cef693dd1a4570.jpg',
            'https://i.pinimg.com/736x/da/ce/bb/dacebbba6c11a09fef2c81bc9ff335f9.jpg',
            'https://i.pinimg.com/736x/f8/c4/68/f8c468d9975f762ca6834a79b238b45f.jpg',
            'https://i.pinimg.com/736x/e3/33/e9/e333e9d6a8fc150c45fb6dc4a499869e.jpg',
            'https://i.pinimg.com/236x/22/6a/6b/226a6b2f3418e0035e943b627f57d30d.jpg',
            'https://i.pinimg.com/236x/ac/fc/56/acfc566128825ade13c879847ff036c1.jpg',
            'https://cdn.discordapp.com/attachments/833671887245672468/918783028745076736/SPOILER_75eb41d74da3ecf1.jpg',
            'https://i.pinimg.com/564x/27/71/24/277124235db0d8e6e1e84dae7056e004.jpg',
            'https://i.pinimg.com/564x/6f/04/00/6f0400f815ae60f0c261094b7b635db6.jpg',
            // You can add as many as you want
        ];
        // Here we will create a random number. Math.random only creates a randomly generated number between 0 and 1.
        const response = smile[Math.floor(Math.random() * smile.length)];
        message.channel.send(response)
    }
}