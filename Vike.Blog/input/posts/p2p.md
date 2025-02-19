Title: Privacy and Security in Online Mario Kart 8 Deluxe
Description: Everything you need to know about IP address security and privacy when playing Mario Kart 8 Deluxe online.
Published: 19/02/2025
Image: /images/bg/rmc.png
HideInPosts: true
---

Recently, an individual has collected the IP addresses of various players from the Mario Kart 8 Deluxe community, leaked them online, and executed denial-of-service (DoS) attacks on them to cause them to disconnect and crash during competitive matches. This individual was able to collect these IP addresses while only needing to spectate a room that the player was playing in. 

In this blog post, I will explain in full detail why this was possible, what someone can do with your IP address, what you can do if your IP address is leaked publicly, and how you can keep your IP address private to prevent this from happening to you.

## IP addresses
An IP address uniquely identifies devices like computers and phones on a network. However, given the vast number of devices worldwide, it isn’t practical to assign a unique IP address to each one. To manage this, we use two types of IP addresses: private and public.

When you connect to a local network such as your home's Wi-Fi, your device is given a private IP address which is unique within that local network. 
If you are trying to check the IP address of a device, you will usually only see your private IP address which will look like one of the following three: `192.168.X.X`, `172.16.X.X` - `172.31.X.X`, or `10.X.X.X`. 
When your device needs to communicate with a device outside the local network, the other device will see your public IP address rather than your private IP address. 
All the devices in a local network will share the same public IP address. 

A public IP address can't be traced back to an exact location on its own, but it can be traced back to a rough geographical area like a city and the Internet Service Provider (ISP) that the IP is registered with. 
This is one of the main reasons you might want to keep your IP address private.

You can see this all for yourself by going to a website like [whatismyipaddress.com](https://whatismyipaddress.com/). This site shows you your public IP address, where it thinks you are located, and what ISP you are using. If you visit this website on multiple devices in your home, you will see that they all have the same public IP address.

## Peer-to-peer multiplayer
When it comes to multiplayer in video games, they will generally follow either the client-server model or the peer-to-peer (P2P) model.

In the client-server model, the company that made the game will run powerful computers that are on 24/7 called servers that players connect to, and the server is responsible for sending data between players.

In the peer-to-peer model, the game will connect players directly to each other and they will send data between each other without the need for a server.
Mario Kart 8 Deluxe uses the P2P model for its online multiplayer.
When you are playing online in Mario Kart 8 Deluxe, your Nintendo Switch will connect to the other players in the room directly without going through any other server.

What this means is that if you are playing Mario Kart online your Switch will know the IP addresses of every other player in the room and all the other players' Switches will know your IP address. 
While these IP addresses are not shown in the game, it is possible for someone with the right tools to see them even if they are just spectating a match. 


If Mario Kart 8 Deluxe was using a client-server model, there would be no way for a player to obtain the IP addresses of other players in the room as they would only know the IP address of the server. 
The server would know all the IP addresses of the players in the room however.

There are two main reasons that a game would use the P2P model over the client-server model: 
- **Latency**: In the client-server model, if your console needs to send data to another console, it first has to go to the server, and then from the server to the other console. In a peer-to-peer model, the data goes directly to the other console and so it will get there much faster and you will have less lag. 
- **Cost**: Running servers is expensive, and if a game is using the P2P model, the company can save money by not needing to run servers.

Both of these are great reasons to choose peer-to-peer, but it does come with the downside that your IP address is shared with other players in the room.
With internet speeds getting faster, the cost of servers getting cheaper, and the rise of edge computing, both of these reasons are becoming less and less relevant, and so I expect that in the future we will see games move away from the P2P model to protect the privacy and security of their players.

Some of Nintendo's recent games like Splatoon 3 are already showing signs of this with their new NPLN architecture which is a hybrid model that does both P2P and client-server. Hopefully for the next Mario Kart game on the Switch 2, Nintendo will design the multiplayer such that everyone's IP address can stay private.

## IP address privacy
Aside from someone using your IP address to find out what city you are from and what ISP you are using, there are a few other things that someone can do with your IP address:

- **DoS attacks**: A DoS attack is when someone sends a large amount of data to your IP address to try and overwhelm your network and cause you to disconnect from the internet. When a DoS attack is performed by multiple machines at once all targeting the same IP address, it is called a Distributed Denial of Service (DDoS) attack. 
- **Scan for vulnerabilities**: Someone with hacking skills can scan your IP address for vulnerabilities to try and break into your network. For example, if you have a security camera on your house which is exposed to the internet and it has a very simple password, they may be able to guess the password and look at your cameras. There have been cases where people have been hacked through their printers, smart fridges, and even their light bulbs.
- **Track online activity**: Websites and advertisers often log IP addresses, and so if they see the same IP address across multiple websites they will know it is likely to all be the same person. This means a website can track you without you even logging in if they know your IP address.

In practice though, the **most common thing** that someone will do with your IP address is **nothing**. 

Unless someone has a reason to target you specifically, they are unlikely to do anything with your IP address and there is no risk to you. In fact, every time you open a website on the internet, you are giving that website your IP address. Even if Mario Kart 8 Deluxe was a client-server game, it is not too difficult for someone to get your IP address by other means such as getting you to click on a link to a website that they own.

## Securing your IP address
If someone does have your IP address and you believe they may have plans to do something malicious with it such as a DoS attack, your best option is to contact your ISP and let them know what is happening. In response they may change your public IP address or block the attacker's IP address. Some ISPs will not be able or willing to do this for you. If you do get your IP address changed, you will need to be extra careful to keep your IP address private, otherwise the attacker might be able to get your new IP address again.

If your ISP is not co-operating, it might be worth changing ISPs to one that will help protect you better. Otherwise, if you are stuck with the IP address that has been leaked and aren't able to change it, your only option is to log into your router and turn on any settings that will help protect you from DoS attacks. This will be different for every router and some routers may not have any settings to help protect you. Some routers will have firewalls as well and if you are able to identify the IP address of the attacker, you can block them using the firewall.

If your IP address belongs to a shared network such as a school, work, or public Wi-Fi, you can contact the network administrator and let them know what is happening. However, it is unlikely that someone will be able to successfully DoS attack these networks and they will likely have protections in place to prevent this from happening so you are probably already safe.

## Keeping your IP address private

### Don't share room IDs
For someone to get your IP address through Mario Kart, they need to be able to join or spectate the room you are playing in. This is one of the reasons that the [Lounge](https://www.mk8dx-lounge.com/) rules have been updated to be more strict about ensuring that room IDs are not displayed on livestreams or shared publicly, so that we can prevent people from getting into rooms and capturing IP addresses of specific players.

### Don't click on suspicious links
The most common way that people get their IP addresses leaked is by clicking on a suspicious link that is sent to them. The person sending the link may be able to see the IP address of the person who opens it. They may try to create a sense of urgency or fear to get you to click the link.

### Use a VPN

If you want to protect your IP address from someone even if they manage to spectate or join your room, your best option is to use a VPN. When using a VPN, rather than your device sending messages directly to the other device, it will send the message to the VPN server, and the VPN server will send the message to the other device. This means that the other device will only see the IP address of the VPN server and not your IP address. 

Using a VPN will keep your IP address private and also protect you from DoS attacks, but it does come at the cost of increased latency as the message has to go to the VPN server first. Finding a VPN provider that has servers that are geographically close to you will help minimise the impact to your latency. Another problem is that VPNs aren't free, and if you do find a free one it is unlikely to work with Mario Kart 8 Deluxe as I describe in the next section.

I should also point out that if someone does already have your IP address and you haven't changed it, then using a VPN won't do anything to protect you from them. A VPN is only useful to prevent people from learning about your IP address in the first place.

## VPN Guide for Mario Kart 8 Deluxe

### Choosing a VPN

Unfortunately, not all VPN services support being able to play Mario Kart 8 Deluxe online with other players, and that is due to the VPN enforcing a strict NAT (NAT Types C or D). Network Address Translation (NAT) solves the problem of identifying a specific device inside a private network if all you know is their public IP address. If you run a connection test in your Nintendo Switch's internet settings and it says your NAT Type is C or D, it is not possible for other players to connect to you directly, and you will get errors when you try to play online.

Below is a list of VPN Providers that I have heard of people trying to use with Mario Kart 8 Deluxe and if they were able to get them to work:

- **Mullvad**: ✅
- **HMA**: ✅
- **Surfshark**: ✅
- **Express VPN**: ✅
- **Running WireGuard or OpenVPN on a VPS**: ✅
- **NordVPN**: ❌
- **Cloudflare WARP**: ❌

If you have any successes or failures with any other VPN service, please [let me know](/about) so I can update this post with that information. 

If you have a VPN installed on your computer and want to see if it will work, you can check your NAT type at [www.checkmynat.com](https://www.checkmynat.com/). For you to be able to play MK8DX online, this should say "**Full Cone**", "**Restricted Cone**", or "**Port Restricted Cone**". If it says "**Symmetric**", you will not be able to use your VPN to play online. Many VPN service providers offer trial periods or money-back guarantees, so check if that is an option before you commit to a subscription in case it doesn't work.

### Setting up the VPN

Once you have found a VPN with the correct NAT type, you now need to get your Nintendo Switch to route all its traffic through your VPN. This is actually quite difficult to do because the Nintendo Switch does not provide any way to specify a VPN client in the network settings. Your choices are either to configure the VPN inside your router if it has "VPN Client" functionality, or set up a VPN-enabled hotspot on a computer and have the Nintendo Switch connect through this hotspot. I would recommend against trying to use a mobile hotspot for this purpose as most mobile devices will not allow you to route hotspot traffic through a VPN.

The way I am doing it personally is by using the VPN client in my router and I would recommend this approach if your router has VPN client functionality. If your router doesn't have a VPN client feature and your router isn't a rental, you might be able to install custom firmware such as OpenWRT or DD-WRT on the router to get VPN client support. I won't walk through this approach in this blog post though, but I would not recommend it unless you have good technical knowledge and have a good understanding of computer networking.

#### Example: Using a Windows Hotspot

For most people, your best option will be to set up a hotspot on a Windows device and configure the hotspot to route traffic through the VPN. 
This is also a complicated process, but below I will walk through an example of how it might work for you. Some VPN providers will have their own guides on how to set this up as well and so I would recommend following that instead.

1. **Connect your Windows device to the VPN.**  
    - Install and launch your preferred VPN client on your Windows device. 
    - Connect to a server that is close to you geographically to minimise latency.
1. **Enable the Mobile Hotspot on Windows**
    - Open **Settings > Network & Internet > Mobile hotspot**.
    - Toggle the Mobile hotspot switch to **On**.
	- Click Edit to set your network’s name (SSID) and password.
    - Save your settings.
1. **Share the VPN connection with the Mobile Hotspot**
    - Open **Control Panel** and navigate to **Network and Sharing Center > Change adapter settings**.
    - Locate your VPN adapter (it may be named something like "TAP-[YourVPN] Adapter" or "VPN [Provider Name]").
    - Right-click on the VPN adapter and select **Properties**.
    - Go to the **Sharing** tab and check the box labeled "**Allow other network users to connect through this computer's Internet connection.**"
    - In the drop-down menu, select the network adapter that represents your mobile hotspot (often called "Local Area Connection*" or "Microsoft Wi-Fi Direct Virtual Adapter").
    - Click **OK** to apply the changes.
1. **Connect your Nintendo Switch to the Hotspot**
    - On your Nintendo Switch, go to **System Settings > Internet > Internet Settings**.
    - Select your hotspot from the list of available networks.
    - Enter the password you set earlier.
    - Test the connection to ensure it works. Ensure that the IP address shown in the connection test is different from your normal IP address.

If you have some errors after doing this, you might need to do step 3 again by unchecking the box, clicking OK, then checking it again, and clicking OK again.