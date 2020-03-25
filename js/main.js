var config =
{
    "sites":
    [
        { "url": "https://www.google.com/webhp?source=search_app",                     "text": "G"     },
        { "url": "http://www.youtube.com/",                                            "text": "YT"    },
        { "url": "http://lms.k12.com/lms/content/index.xhtml;jsessionid=283FC043AD4C3D5C2C6C7CC2CA801305.node2?cid=landingpage", "text": "K12"  },
        { "url": "http://store.steampowered.com/",                                     "text": "ST"    },
        { "url": "https://mail.google.com/mail/u/0/",                                  "text": "MAIL"  },
        { "url": "http://www.twitch.tv/",                                              "text": "TTV"   },
        { "url": "http://www.reddit.com/",                                             "text": "RED"   },
        { "url": "http://coriolisgaming.invisionzone.com/",                            "text": "CGS"   },
        { "url": "http://csgolounge.com/",                                             "text": "CSGL"  },
        { "url": "http://boards.4chan.org/v/",                                         "text": "/v/"   },
        { "url": "http://boards.4chan.org/g/",                                         "text": "/g/"   },
        { "url": "http://boards.4chan.org/wg/",                                        "text": "/wg/"  },
    ]
}, d = document;

d.addEventListener("DOMContentLoaded", function()
{
    d.removeEventListener("DOMContentLoaded", arguments.callee, false);

    for (var i = 0, MAX = config.sites.length; i < MAX; ++i)
    {
        var p = i / 12,
            site = d.createElement("a");
        site.href = config.sites[i].url;
        site.textContent = config.sites[i].text;

        if (i % 12 === 0)
        {
            var page = d.createElement("div");
            page.id = "page" + p;

            d.querySelector("#sites").appendChild(page);
            // d.querySelector("#navigation ul").appendChild((d.createElement("li")));

            if (p === 0)
            {
                // d.querySelector("#navigation ul li").classList.add("selected");
                d.querySelector("#sites > div").classList.add("selected");
            }
        }

        d.querySelector("#page" + Math.floor(p)).appendChild(site);
    }
});
