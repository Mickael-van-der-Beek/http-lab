Welcome to the [HTTP-LAB] project
=================================

The goal of this project is to implement a robust HTTP server from top to bottom while learning about each intermediary step.


		   [ `HTTP Server` ]
				| |
				 V
	[ `Node.js net (TCP) module`  ]
				| |
				 V
[ `C bindings imported as Node.js add-ons` ]
				| |
				 V
		[ `C socket library` ]
				| |
				 V
	[ `mTCP / Megapipe sockets` ]
				| |
				 V
	   [ `*NIX Kernel tweaks` ]


This is the plan:

	- 1. Implementing a `RFC2616` compatible HTTP server with Node.js's `net` module.
	- 2. Write tests or maybe find tests used in production ready software like `NginX` or `Apache's HTTPD`.
	--------------------------------- [ Tag for version 1.0 ] -----------------------------------------------
	- 3. Benchmark performance in comparison with `NginX` or `Apache's HTTPD`.
	- 4. Reimplement bottlenecks in C and import them as Node.js `add-ons`.
	- 5. Reiterate over `(2)` and `(3)`.
	--------------------------------- [ Tag for version 2.0 ] -----------------------------------------------
	- 6. Reimplement Linux Kernel's `sockets` with `mTCP` or `Megapipe`.
	- 5. Reiterate over `(2)` and `(3)`.
	--------------------------------- [ Tag for version 3.0 ] -----------------------------------------------
	- 7. Tweak the Linux Kernel
	--------------------------------- [ Tag for version 4.0 (Production ready) ] ----------------------------
	- 8. Tag the project as production ready and depending on the state of the project at that time mabye also start adding additional features like caching, HTTPS, multi-processing, multi-threading ...etc.