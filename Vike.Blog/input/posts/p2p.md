---
Title: Privacy and Security in Online Mario Kart 8 Deluxe
Description: Everything you need to know about IP address security and privacy when playing Mario Kart 8 Deluxe online.
Published: 20/02/2025
Image: /images/bg/rmc.png
---

Recently, an individual has collected the IP addresses of various players from the Mario Kart 8 Deluxe community, leaked them online, and executed denial-of-service (DoS) attacks on them to cause them to disconnect and crash during competitive matches. This individual was able to collect these IP addresses while only needing to spectate a room that the player was playing in.

In this blog post, I will explain in full detail why this was possible, what someone can do with your IP address, what you can do if your IP address is leaked publicly, and how you can keep your IP address private to prevent this from happening to you.

## IP Addresses

An IP address uniquely identifies devices like computers and phones on a network. However, given the vast number of devices worldwide, it isn’t practical to assign a unique IP address to each one. To manage this, we use two types of IP addresses: private and public.

When you connect to a local network such as your home's Wi-Fi, your device is given a private IP address which is unique within that local network.  
If you are trying to check the IP address of a device, you will usually only see your private IP address which will look like one of the following: `192.168.X.X`, `172.16.X.X` - `172.31.X.X`, or `10.X.X.X`.  
When your device needs to communicate with a device outside the local network, the other device will see your public IP address rather than your private IP address.  
All the devices in a local network will share the same public IP address.

A public IP address can't be traced back to an exact location on its own, but it can be traced back to a rough geographical area like a city and the Internet Service Provider (ISP) that the IP is registered with. This is one of the main reasons you might want to keep your IP address private.

You can see this all for yourself by going to a website like [whatismyipaddress.com](https://whatismyipaddress.com/). This site shows you your public IP address, where it thinks you are located, and what ISP you are using. If you visit this website on multiple devices in your home, you will see that they all have the same public IP address.

## Peer-to-Peer Multiplayer

When it comes to multiplayer in video games, they will generally follow either the client-server model or the peer-to-peer (P2P) model.

In the client-server model, the company that made the game will run powerful computers that are on 24/7 called servers that players connect to, and the server is responsible for sending data between players.

In the peer-to-peer model, the game will connect players directly to each other and they will send data between each other without the need for a server. Mario Kart 8 Deluxe uses the P2P model for its online multiplayer. When you are playing online in Mario Kart 8 Deluxe, your Nintendo Switch will connect to the other players in the room directly without going through any other server.

What this means is that if you are playing Mario Kart online, your Switch will know the IP addresses of every other player in the room and all the other players' Switches will know your IP address. While these IP addresses are not shown in the game, it is possible for someone with the right tools to see them even if they are just spectating a match.

If Mario Kart 8 Deluxe was using a client-server model, there would be no way for a player to obtain the IP addresses of other players in the room as they would only know the IP address of the server. (Though the server would know all the IP addresses of the players in the room.)

There are two main reasons that a game would use the P2P model over the client-server model: 
- **Latency**: In the client-server model, if your console needs to send data to another console, it first has to go to the server, and then from the server to the other console. In a peer-to-peer model, the data goes directly to the other console, resulting in less lag. 
- **Cost**: Running servers is expensive, and using the P2P model helps save on overhead costs.

Both of these benefits come with the downside that your IP address is shared with other players in the room. With internet speeds getting faster, the cost of servers falling, and the rise of edge computing, these reasons are becoming less critical, and I expect that in the future we will see games move away from the P2P model to better protect the privacy and security of their players.

Some of Nintendo's recent games like Splatoon 3 are already showing signs of this with their new NPLN architecture which is a hybrid model that does both P2P and client-server. Hopefully, for the next Mario Kart game on the Switch 2, Nintendo will design the multiplayer such that everyone's IP address can stay private.

## IP Address Privacy

Aside from someone using your IP address to find out what city you are from and what ISP you use, there are a few other things that someone can do with your IP address:

- **DoS attacks**: A DoS attack is when someone sends a large amount of data to your IP address to try and overwhelm your network and cause you to disconnect from the internet. When a DoS attack is performed by multiple machines all targeting the same IP address, it is called a Distributed Denial of Service (DDoS) attack.
- **Scan for vulnerabilities**: Someone with hacking skills can scan your IP address for vulnerabilities to try and break into your network. For example, if you have a security camera at your house that is exposed to the internet with a weak password, they may be able to guess it and access your camera. There have been cases where people have been hacked through their printers, smart fridges, and even their light bulbs.
- **Track online activity**: Websites and advertisers often log IP addresses. If they see the same IP address across multiple websites, they can conclude it belongs to the same person, enabling tracking without even needing a login.

In practice, however, the **most common thing** that someone will do with your IP address is **nothing**. Unless someone targets you specifically, there is minimal risk. After all, every time you visit a website, your IP address is "leaked" to them.

## Securing Your IP Address

If someone does have your IP address and you believe they may have malicious plans (like a DoS attack), your best option is to contact your ISP. They may change your public IP address or block the attacker's IP address. Some ISPs may not be able or willing to help with this. If your IP address is changed, be extra careful to keep it private, as an attacker might try to obtain your new address.

If your ISP is not cooperative, it might be worth switching to one that can better protect you. Otherwise, if you are stuck with a leaked IP address, your only option might be to log into your router and enable any settings that help protect you from DoS attacks, such as activating a built-in firewall or blocking the attacker’s IP.

For shared networks like those in schools or workplaces, contact the network administrator. These networks typically have protections in place to prevent successful DoS attacks, so you’re likely already safe.

## Keeping Your IP Address Private

### Don't Share Room IDs
For someone to get your IP address through Mario Kart, they need to join or spectate the room you are playing in. This is one reason the [Lounge](https://www.mk8dx-lounge.com/) rules have been updated to be more strict about ensuring that room IDs are not displayed on livestreams or shared publicly.

### Don't Click on Suspicious Links
The most common way that people get their IP addresses leaked is by clicking on a suspicious link that is sent to them. The person sending the link may be able to see the IP address of the person who opens it. They may try to create a sense of urgency or fear to get you to click the link.

### Use a VPN
If you want to protect your IP address even if someone manages to spectate or join your room, your best option is to use a VPN. When using a VPN, your device sends data to the VPN server, which then relays it to the other device. This means that the other device only sees the IP address of the VPN server, not your actual IP address.

Using a VPN will protect your IP address and help defend against DoS attacks, but it does come at the cost of increased latency since data must travel through the VPN server. VPNs also cost money. If you do find a free VPN it is unlikely to work with Mario Kart 8 Deluxe online and they are probably selling your data. Also, if someone already has your IP address and you haven't changed it, using a VPN won't protect you retroactively. A VPN is only useful for preventing future exposure.

## VPN Guide for Mario Kart 8 Deluxe

### Choosing a VPN

Unfortunately, not all VPN services support playing Mario Kart 8 Deluxe online due to strict NAT enforcement (NAT Types C or D). NAT (Network Address Translation) is used to identify specific devices in a private network given a single public IP address. If a connection test on your Nintendo Switch shows NAT Type as C or D, other players will not be able to connect directly to you, and you will get errors trying to play online.

Below is a list of VPN providers that people have tried to use and if they could play Mario Kart 8 Deluxe online with it:

- **Surfshark**: ✅
- **Mullvad**: ✅
- **HMA**: ✅
- **ExpressVPN**: ✅
- **Running WireGuard or OpenVPN on a VPS**: ✅
- **NordVPN**: ❌
- **Cloudflare WARP**: ❌

If you have any successes or failures with other VPN services, please [let me know](/about) so I can update this post accordingly.

To verify if your VPN works with MK8DX online, check your NAT type at [www.checkmynat.com](https://www.checkmynat.com/). To play online, the NAT type should display as **Full Cone**, **Restricted Cone**, or **Port Restricted Cone**. If it says **Symmetric**, your VPN will not support direct connections for online play.

### Setting Up the VPN

Since the Nintendo Switch does not offer a built-in VPN option, your choices are to either configure the VPN within your router if it supports VPN Client functionality, or set up a VPN on another device and share that connection with your Switch via a Wi-Fi Hotspot or over ethernet.

Personally, I use the VPN client in my router and recommend this approach if your router supports it. If not, you might be able to install custom firmware (such as OpenWRT or DD-WRT) on your router to enable VPN support, though I would not recommend doing this unless you know what you are doing since you can accidentally brick your router.

#### Example: Using a Windows Hotspot

For most people, the best option will be to set up a hotspot on a computer and configure the hotspot to route traffic through the VPN. 
This is also a complicated process, but below I will walk through an example of how it might work for a Windows computer. Some VPN providers will have their own guides on how to set this up as well and so I would recommend following that instead.

1. **Connect your Windows device to the VPN.**  
   - Install and launch your preferred VPN client.  
   - Connect to a server that is close to your location to minimize latency.

2. **Enable the Mobile Hotspot on Windows.**  
   - Open **Settings > Network & Internet > Mobile Hotspot**.  
   - Toggle the Mobile Hotspot switch to **On**.  
   - Click **Edit** to set the network’s name (SSID) and password, then save your settings.

3. **Share the VPN connection with the Mobile Hotspot.**  
   - Open **Control Panel > Network and Sharing Center > Change adapter settings**.  
   - Locate your VPN adapter (e.g., "TAP-[YourVPN] Adapter" or "VPN [Provider Name]").  
   - Right-click the VPN adapter, select **Properties**, and go to the **Sharing** tab.  
   - Check the box labeled "**Allow other network users to connect through this computer's Internet connection.**"  
   - In the drop-down menu, select the network adapter that represents your mobile hotspot (often called "Local Area Connection" or "Microsoft Wi-Fi Direct Virtual Adapter").  
   - Click **OK** to apply the changes.

4. **Connect your Nintendo Switch to the Hotspot.**  
   - On your Switch, go to **System Settings > Internet > Internet Settings**.  
   - Select your hotspot from the available networks and enter the password you set.  
   - Test the connection to ensure it works and that the displayed IP address is different from your normal one.

If you have some errors after doing this, you might need to do step 3 again by unchecking the box, clicking OK, then checking it again, and clicking OK again.