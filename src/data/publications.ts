export type Publication = {
  title: string;
  authors: string;
  venue: string;
  year: number | null;
  tags: string[];
  award: string | null;
  links: { label: string; url: string }[];
};

// Edit this list to add papers. Tags drive the filter buttons automatically.
export const publications: Publication[] = [
  {
    "title": "Elements of Scheduling",
    "authors": "Jan Karel Lenstra and David B. Shmoys",
    "venue": "CoRR abs/2001.06005 (2020) http://arxiv.org/abs/2001.06005",
    "year": 2020,
    "tags": [
      "Books"
    ],
    "award": null,
    "links": [
      {
        "label": "http://arxiv.org/abs/2001.06005",
        "url": "http://arxiv.org/abs/2001.06005"
      }
    ]
  },
  {
    "title": "The Design of Approximation Algorithms",
    "authors": "D.P. Williamson, D.B. Shmoys",
    "venue": "Cambridge University Press, 2011",
    "year": 2011,
    "tags": [
      "Books",
      "Approximation Algorithms"
    ],
    "award": null,
    "links": []
  },
  {
    "title": "Selected Publications of Eugene L. Lawler",
    "authors": "K. Aardal, J.K. Lenstra, F. Maffioli, and D.B Shmoys (eds.)",
    "venue": "CWI, 1999",
    "year": 1999,
    "tags": [
      "Books"
    ],
    "award": null,
    "links": []
  },
  {
    "title": "The Traveling Salesman Problem",
    "authors": "E.L. Lawler, J.K. Lenstra, A.H.G. Rinnooy Kan, and D.B. Shmoys (eds.)",
    "venue": "Wiley, Chichester, 1985",
    "year": 1985,
    "tags": [
      "Books",
      "TSP & Routing"
    ],
    "award": null,
    "links": []
  },
  {
    "title": "Modeling for COVID-19 college reopening decisions: Cornell, a case study",
    "authors": "P. I. Frazier, J. M. Cashore, N. Duan, S. G. Henderson, A. Janmohamed, B. Liu, D. B. Shmoys, J. Wan, and Y. Zhang",
    "venue": "Proceedings of the National Academy of Sciences 119, e2112532119 (2022)",
    "year": 2022,
    "tags": [
      "Data-Driven Decisions",
      "Public Policy"
    ],
    "award": null,
    "links": []
  },
  {
    "title": "Combatting Gerrymandering with Social Choice: the Design of Multi-member Districts",
    "authors": "N. Garg, W. Gurnee, D. Rothschild, David B. Shmoys",
    "venue": "CoRR abs/2107.07083 (2021)",
    "year": 2021,
    "tags": [
      "Data-Driven Decisions",
      "Public Policy"
    ],
    "award": null,
    "links": [
      {
        "label": "CoRR abs/2107.07083",
        "url": "https://arxiv.org/abs/2107.07083"
      }
    ]
  },
  {
    "title": "Fairmandering: A column generation heuristic for fairness-optimized political districting",
    "authors": "W. Gurnee, D.B. Shmoys",
    "venue": "Proceedings of the 2021 SIAM Conference on Applied and Computational Discrete Algorithms (ACDA 2021), 2021, 88-99",
    "year": 2021,
    "tags": [
      "Data-Driven Decisions",
      "Public Policy"
    ],
    "award": "Awarded Best Paper Prize",
    "links": [
      {
        "label": "PDF",
        "url": "http://people.orie.cornell.edu/shmoys/pdf/GurneeS21.pdf"
      },
      {
        "label": "TXT",
        "url": "http://people.orie.cornell.edu/shmoys/pdf/GurneeS21.txt"
      }
    ]
  },
  {
    "title": "Analytics and Bikes: Riding Tandem with Motivate to Improve Mobility",
    "authors": "Daniel Freund, Shane G. Henderson, Eoin O'Mahony, David B. Shmoys",
    "venue": "INFORMS J. on Applied Analytics 49, 2019, 310-323",
    "year": 2019,
    "tags": [
      "Data-Driven Decisions",
      "Bike Sharing"
    ],
    "award": "2018 Wagner Prize Article",
    "links": []
  },
  {
    "title": "Bike Angels: An Analysis of Citi Bike's I ncentive Program",
    "authors": "H. Chung, D. Freund, and D.B. Shmoys",
    "venue": "ACM COMPASS 2018, 5:1-5:9",
    "year": 2018,
    "tags": [
      "Data-Driven Decisions",
      "Bike Sharing"
    ],
    "award": "Awarded Best Paper Prize",
    "links": []
  },
  {
    "title": "Minimizing Multimodular Functions and Allocating Capacity in Bike-Sharing Systems",
    "authors": "D. Freund, S.G. Henderson, and D.B. Shmoys",
    "venue": "2017 MOS Conference on Integer Programming and Combinatorial Optimization (IPCO), 2017, 186--198",
    "year": 2017,
    "tags": [
      "Data-Driven Decisions",
      "Bike Sharing"
    ],
    "award": null,
    "links": []
  },
  {
    "title": "Data Analysis and Optimization for (Citi)Bike Sharing",
    "authors": "E. O'Mahony and D.B. Shmoys",
    "venue": "Proceedings of the 29th Conference on Artificial Intelligence (AAAI), 2015, 687--694",
    "year": 2015,
    "tags": [
      "Data-Driven Decisions",
      "Bike Sharing"
    ],
    "award": null,
    "links": []
  },
  {
    "title": "Mathematical programming guides air-ambulance routing at Ornge",
    "authors": "T. Carnes, S.G. Henderson, D.B. Shmoys, M. Ahgari and R. Macdonald",
    "venue": "Interfaces 43, 2013, 232-239",
    "year": 2013,
    "tags": [
      "Data-Driven Decisions",
      "TSP & Routing"
    ],
    "award": null,
    "links": [
      {
        "label": "PDF",
        "url": "http://people.orie.cornell.edu/shmoys/pdf/CarnesHSAM13.pdf"
      },
      {
        "label": "TXT",
        "url": "http://people.orie.cornell.edu/shmoys/pdf/CarnesHSAM13.txt"
      }
    ]
  },
  {
    "title": "Computational sustainability: computing for a better world and a sustainable future",
    "authors": "Carla P. Gomes, Thomas G. Dietterich, Christopher Barrett, Jon Conrad, Bistra Dilkina, Stefano Ermon, Fei Fang, Andrew Farnsworth, Alan Fern, Xiaoli Z. Fern, Daniel Fink, Douglas H. Fisher, Alexander Flecker, Daniel Freund, Angela Fuller, John M. Gregoire, John E. Hopcroft, Steve Kelling, J. Zico Kolter, Warren B. Powell, Nicole D. Sintov, John S. Selker, Bart Selman, Daniel Sheldon, David B. Shmoys, Milind Tambe, Weng-Keen Wong, Christopher Wood, Xiaojian Wu, Yexiang Xue, Amulya Yadav, Abdul-Aziz Yakubu, Mary Lou Zeeman",
    "venue": "Communications of the ACM 62, 2019, 56-65",
    "year": 2019,
    "tags": [
      "Computational Sustainability"
    ],
    "award": null,
    "links": []
  },
  {
    "title": "Approximation algorithms for fragmenting a graph against a stochastically-located threat",
    "authors": "D.B. Shmoys and G. Spencer",
    "venue": "Theory Computing Systems 56, 96-134, 2015. [Preliminary version appeared in Proceedings of the 9th Annual Workshop on Approximation and Online Algorithms, Lecture Notes in Computer Science, 7164.]",
    "year": 2015,
    "tags": [
      "Computational Sustainability",
      "Approximation Algorithms"
    ],
    "award": null,
    "links": []
  },
  {
    "title": "Maximizing Spread of Cascades Using Network Design",
    "authors": "D. Sheldon, B. Dilkina, A. Elmachtoub, R. Finseth, A. Sabharwal, J. Conrad, C. Gomes, D.B. Shmoys, W. Allen, O. Amundsen and W. Vaughn",
    "venue": "Proceedings of the 16th Conference on Uncertainty in Artificial Intelligence: UAI2010, 2010",
    "year": 2010,
    "tags": [
      "Computational Sustainability",
      "Networks"
    ],
    "award": null,
    "links": []
  },
  {
    "title": "Approximation Algorithms for the Bottleneck Asymmetric Traveling Salesman Problem",
    "authors": "H.-C. An, R. Kleinberg, D.B. Shmoys",
    "venue": "ACM Transactions on Algorithms 17, 2021, 35:1-35:12. [Preliminary version appeared in Proceedings of APPROX-RANDOM, 2010.]",
    "year": 2021,
    "tags": [
      "Scheduling",
      "Approximation Algorithms",
      "TSP & Routing"
    ],
    "award": null,
    "links": []
  },
  {
    "title": "Budgeted Prize-Collecting Traveling Salesman and Minimum Spanning Tree Problems",
    "authors": "Alice Paul, Daniel Freund, Aaron M. Ferber, David B. Shmoys, David P. Williamson",
    "venue": "Mathematics of Operations Research 45, 2020, 576-590. [Preliminary Version appeared in European Symposium on Algorithms, 2017.]",
    "year": 2020,
    "tags": [
      "Scheduling",
      "TSP & Routing"
    ],
    "award": null,
    "links": []
  },
  {
    "title": "Sincronia: Near-Optimal Network Design for Coflows",
    "authors": "S. Agarwal, S. Rajakrishnan, A. Narayan, R. Agarwal, D.B. Shmoys and A. Vahdat",
    "venue": "ACM SIGCOMM 2018, 16 -- 29",
    "year": 2018,
    "tags": [
      "Scheduling",
      "Networks"
    ],
    "award": "Awarded Best Student Paper Prize",
    "links": []
  },
  {
    "title": "Improving Christofides' algorithm for the s-t path TSP",
    "authors": "H.-C. An, R. Kleinberg, and D.B. Shmoys",
    "venue": "J. Assoc. Comput. Mach. 62, article 34, 2015. [Preliminary version appeared in Proceedings of the 44th Annual ACM Symposium on Theory of Computing.]",
    "year": 2015,
    "tags": [
      "Scheduling",
      "TSP & Routing"
    ],
    "award": null,
    "links": []
  },
  {
    "title": "A primal-dual approximation algorithm for min-sum single-machine scheduling problems",
    "authors": "M. Cheung, J. Mestre, D.B. Shmoys, and J. Verschae",
    "venue": "SIAM J. on Discrete Mathematics 31, 825--838. [Preliminary version appeared in Proceedings of APPROX-RANDOM 2011.]",
    "year": 2011,
    "tags": [
      "Scheduling",
      "Approximation Algorithms",
      "Linear Programming"
    ],
    "award": null,
    "links": []
  },
  {
    "title": "Aggregating courier deliveries",
    "authors": "P.R. Steele, S.G. Henderson, and D.B. Shmoys",
    "venue": "Naval Logistics Research 65,187-202, 2018",
    "year": 2018,
    "tags": [
      "Scheduling"
    ],
    "award": null,
    "links": []
  },
  {
    "title": "Scheduling to minimize average completion time: off-line and on-line approximation algorithms",
    "authors": "L.A. Hall, A. S. Schulz, D.B. Shmoys, and J. Wein",
    "venue": "Mathematics of Operations Research 22, 1997, 513-544",
    "year": 1997,
    "tags": [
      "Scheduling",
      "Approximation Algorithms"
    ],
    "award": null,
    "links": [
      {
        "label": "PDF",
        "url": "http://people.orie.cornell.edu/shmoys/pdf/swjCj-mor.pdf"
      },
      {
        "label": "TXT",
        "url": "http://people.orie.cornell.edu/shmoys/pdf/swjCj-mor.txt"
      }
    ]
  },
  {
    "title": "Approximation algorithms for precedence-constrained scheduling problems on parallel machines that run at different speeds",
    "authors": "F.A. Chudak and D.B. Shmoys",
    "venue": "J. Algorithms 30, 1999, 323-343. [Special issue of selected papers from the 8th Annual ACM-SIAM Symposium on Discrete Algorithms.]",
    "year": 1999,
    "tags": [
      "Scheduling",
      "Approximation Algorithms"
    ],
    "award": null,
    "links": [
      {
        "label": "PDF",
        "url": "http://people.orie.cornell.edu/shmoys/pdf/qprec.pdf"
      },
      {
        "label": "TXT",
        "url": "http://people.orie.cornell.edu/shmoys/pdf/qprec.txt"
      }
    ]
  },
  {
    "title": "A new approach to computing optimal schedules for the job-shop scheduling problem",
    "authors": "P. Martin and D.B. Shmoys",
    "venue": "In Proceedings of the 5th International IPCO Conference, 1996, 389-403. Paper PDF Paper TXT Tables PDF",
    "year": 1996,
    "tags": [
      "Scheduling"
    ],
    "award": null,
    "links": [
      {
        "label": "Paper PDF",
        "url": "http://people.orie.cornell.edu/shmoys/pdf/ipco-paper.pdf"
      },
      {
        "label": "Paper TXT",
        "url": "http://people.orie.cornell.edu/shmoys/pdf/ipco-paper.txt"
      },
      {
        "label": "Tables PDF",
        "url": "http://people.orie.cornell.edu/shmoys/pdf/ipco-tables.pdf"
      }
    ]
  },
  {
    "title": "Scheduling to minimize average completion time: off-line and on-line algorithms",
    "authors": "L.A. Hall, D.B. Shmoys, and J. Wein",
    "venue": "In the Proceeding of the 7th Annual ACM-SIAM Symposium on Discrete Algorithms, 1996, 142-151",
    "year": 1996,
    "tags": [
      "Scheduling"
    ],
    "award": null,
    "links": []
  },
  {
    "title": "An approximation algorithm for the generalized assignment problem",
    "authors": "D.B. Shmoys and E. Tardos,",
    "venue": "Mathematical Programming A 62, 1993, 461-474",
    "year": 1993,
    "tags": [
      "Scheduling",
      "Approximation Algorithms"
    ],
    "award": null,
    "links": []
  },
  {
    "title": "Proceedings of APPROX-RANDOM",
    "authors": "I. Gorodezky, R.D. Kleinberg, D.B. Shmoys, and G. Spencer. Improved Lower Bounds for the Universal and a priori TSP",
    "venue": "2010, 178-191",
    "year": 2010,
    "tags": [
      "Stochastic Optimization"
    ],
    "award": null,
    "links": []
  },
  {
    "title": "A constant approximation algorithm for the a priori TSP",
    "authors": "D.B. Shmoys and K. Talwar",
    "venue": "Proceedings of the 13th MPS Conference on Integer Programming and Combinatorial Optimization, 2008, 331-343",
    "year": 2008,
    "tags": [
      "Stochastic Optimization",
      "Approximation Algorithms",
      "TSP & Routing"
    ],
    "award": null,
    "links": [
      {
        "label": "PDF",
        "url": "http://people.orie.cornell.edu/shmoys/pdf/ShmoysTalwar08.pdf"
      },
      {
        "label": "TXT",
        "url": "http://people.orie.cornell.edu/shmoys/pdf/ShmoysTalwar08.txt"
      }
    ]
  },
  {
    "title": "Algorithms for the universal and a priori TSP",
    "authors": "F. Schalekamp and D.B. Shmoys",
    "venue": "Operations Research Letters 36, 2008, 1-3",
    "year": 2008,
    "tags": [
      "Stochastic Optimization",
      "TSP & Routing"
    ],
    "award": null,
    "links": [
      {
        "label": "PDF",
        "url": "http://people.orie.cornell.edu/shmoys/pdf/SchalekampShmoysORL.pdf"
      },
      {
        "label": "TXT",
        "url": "http://people.orie.cornell.edu/shmoys/pdf/SchalekampShmoysORL.txt"
      }
    ]
  },
  {
    "title": "Approximation algorithms for capacitated stochastic inventory control problems",
    "authors": "R. Levi, R. Roundy, D.B. Shmoys, and V.A. Truong",
    "venue": "Operations Research 56, 2008, 1186-1199",
    "year": 2008,
    "tags": [
      "Stochastic Optimization",
      "Approximation Algorithms"
    ],
    "award": null,
    "links": [
      {
        "label": "PDF",
        "url": "http://people.orie.cornell.edu/shmoys/pdf/LeviRoundyShmoysTruong08.pdf"
      },
      {
        "label": "TXT",
        "url": "http://people.orie.cornell.edu/shmoys/pdf/LeviRoundyShmoysTruong08.txt"
      }
    ]
  },
  {
    "title": "Approximation algorithms for 2-stage stochastic scheduling problems",
    "authors": "D.B. Shmoys and M. Sozio",
    "venue": "Proceedings of the 11th MPS Conference on Integer Programming and Combinatorial Optimization, 2007, 145-157",
    "year": 2007,
    "tags": [
      "Stochastic Optimization",
      "Approximation Algorithms"
    ],
    "award": null,
    "links": [
      {
        "label": "PDF",
        "url": "http://people.orie.cornell.edu/shmoys/pdf/ShmoysSozio07.pdf"
      },
      {
        "label": "TXT",
        "url": "http://people.orie.cornell.edu/shmoys/pdf/ShmoysSozio07.txt"
      }
    ]
  },
  {
    "title": "Approximation algorithms for stochastic inventory control models",
    "authors": "R. Levi, M. Pal, R. Roundy, and D. Shmoys",
    "venue": "Mathematics of Operations Research 32, 2007, 284-302. Preliminary version appeared in Proceedings of the 11th MPS Conference on Integer Programming and Combinatorial Optimization, 2005, 306-320",
    "year": 2007,
    "tags": [
      "Stochastic Optimization",
      "Approximation Algorithms"
    ],
    "award": null,
    "links": [
      {
        "label": "Journal Version PDF",
        "url": "http://people.orie.cornell.edu/shmoys/pdf/stoch-inv.pdf"
      },
      {
        "label": "Journal Version TXT",
        "url": "http://people.orie.cornell.edu/shmoys/pdf/stoch-inv.txt"
      }
    ]
  },
  {
    "title": "Provably near-optimal sampling-based policies for stochastic inventory control models",
    "authors": "R. Levi, R. Roundy, and D.B. Shmoys",
    "venue": "Mathematics of Operations Research 32, 2007, 821-839. Preliminary version appeared in Proceedings of STOC 2006, 739-748",
    "year": 2007,
    "tags": [
      "Stochastic Optimization"
    ],
    "award": null,
    "links": [
      {
        "label": "Journal Version PDF",
        "url": "http://people.orie.cornell.edu/shmoys/pdf/sampling.pdf"
      },
      {
        "label": "Journal Version TXT",
        "url": "http://people.orie.cornell.edu/shmoys/pdf/sampling.txt"
      }
    ]
  },
  {
    "title": "An approximation scheme for stochastic linear programming and its application to stochastic integer programs",
    "authors": "D.B. Shmoys and C. Swamy",
    "venue": "Journal of the ACM 53, 2006, 973-1012. Preliminary version appeared as \"Stochastic Optimization is (almost) as Easy as Deterministic Optimization\" in Proceedings of FOCS 2004, pages 228-237",
    "year": 2006,
    "tags": [
      "Stochastic Optimization",
      "Approximation Algorithms",
      "Linear Programming"
    ],
    "award": null,
    "links": [
      {
        "label": "Journal Version PDF",
        "url": "http://people.orie.cornell.edu/shmoys/pdf/ShmoysSwamy05-journal.pdf"
      },
      {
        "label": "Journal Version TXT",
        "url": "http://people.orie.cornell.edu/shmoys/pdf/ShmoysSwamy05-journal.txt"
      }
    ]
  },
  {
    "title": "Sampling-based approximation algorithms for multi-stage stochastic optimization",
    "authors": "C. Swamy and D.B. Shmoys",
    "venue": "SIAM J. on Computing 41, 975-1004. [Preliminary version appeared in Proceedings of 45th Annual IEEE Symposium on Foundations of Computer Science, 2005, 357-366.]",
    "year": 2005,
    "tags": [
      "Stochastic Optimization",
      "Approximation Algorithms"
    ],
    "award": null,
    "links": [
      {
        "label": "PDF",
        "url": "http://people.orie.cornell.edu/shmoys/pdf/multistagefnl.pdf"
      },
      {
        "label": "TXT",
        "url": "http://people.orie.cornell.edu/shmoys/pdf/multistagefnl.txt"
      }
    ]
  },
  {
    "title": "On the Power of Static Assignment Policies for Robust Facility Location Problems",
    "authors": "Omar El Housni, Vineet Goyal, David B. Shmoys",
    "venue": "Proceedings of the 2021 MOS Conference on Integer Programming and Combinatorial Optimization (IPCO), 2021, 252-267",
    "year": 2021,
    "tags": [
      "Facility Location"
    ],
    "award": null,
    "links": [
      {
        "label": "PDF",
        "url": "http://people.orie.cornell.edu/shmoys/pdf/ElHousniGS21.pdf"
      },
      {
        "label": "TXT",
        "url": "http://people.orie.cornell.edu/shmoys/pdf/ElHousniGS21.txt"
      }
    ]
  },
  {
    "title": "Primal-dual schema and Lagrangian relaxation for the k-location-routing problem",
    "authors": "T. Carnes and D.B. Shmoys",
    "venue": "Proceedings of APPROX-RANDOM, 2011, 99-110",
    "year": 2011,
    "tags": [
      "Facility Location",
      "TSP & Routing",
      "Linear Programming"
    ],
    "award": null,
    "links": []
  },
  {
    "title": "LP-based approximation algorithms for capacitated facility location",
    "authors": "R. Levi, D.B. Shmoys, and C. Swamy",
    "venue": "Mathematical Programming 131, 2012, 365-379. [Preliminary version appeared in Proceedings of the 10th MPS Conference on Integer Programming and Combinatorial Optimization, 2004, 206-218.]",
    "year": 2012,
    "tags": [
      "Facility Location",
      "Approximation Algorithms",
      "Linear Programming"
    ],
    "award": null,
    "links": [
      {
        "label": "PDF",
        "url": "http://people.orie.cornell.edu/shmoys/pdf/caphfl.pdf"
      },
      {
        "label": "TXT",
        "url": "http://people.orie.cornell.edu/shmoys/pdf/caphfl.txt"
      }
    ]
  },
  {
    "title": "Fault-tolerant facility location",
    "authors": "C. Swamy and D.B. Shmoys",
    "venue": "ACM Transactions on Algorithms 4, 2008. Preliminary version appeared in Proceedings 14th Annual ACM-SIAM Symposium on Discrete Algorithms, 2003, 735-736",
    "year": 2008,
    "tags": [
      "Facility Location"
    ],
    "award": null,
    "links": [
      {
        "label": "Journal Version PDF",
        "url": "http://people.orie.cornell.edu/shmoys/pdf/SwamyShmoys08.pdf"
      },
      {
        "label": "Journal Version TXT",
        "url": "http://people.orie.cornell.edu/shmoys/pdf/SwamyShmoys08.txt"
      }
    ]
  },
  {
    "title": "Facility location with service installation costs",
    "authors": "D.B. Shmoys, C. Swamy and R. Levi",
    "venue": "in Proceedings of the 15th Annual ACM-SIAM Symposium on Discrete Algorithms, 2004, 1081-1090",
    "year": 2004,
    "tags": [
      "Facility Location"
    ],
    "award": null,
    "links": [
      {
        "label": "PDF",
        "url": "http://people.orie.cornell.edu/shmoys/pdf/faclwsic.pdf"
      },
      {
        "label": "TXT",
        "url": "http://people.orie.cornell.edu/shmoys/pdf/faclwsic.txt"
      }
    ]
  },
  {
    "title": "Lagrangian relaxation for the k-median problem: new insights and continuity properties",
    "authors": "A. Archer, R. Rajagopalan, D.B. Shmoys",
    "venue": "in Proceedings of the 11th Annual European Symposium on Algorithms, 2003, 31--42",
    "year": 2003,
    "tags": [
      "Facility Location",
      "Clustering"
    ],
    "award": null,
    "links": [
      {
        "label": "PDF",
        "url": "http://people.orie.cornell.edu/shmoys/pdf/kmedian-esa.pdf"
      },
      {
        "label": "TXT",
        "url": "http://people.orie.cornell.edu/shmoys/pdf/kmedian-esa.txt"
      }
    ]
  },
  {
    "title": "Improved approximation algorithms for the uncapacitated facility location problem",
    "authors": "F.A. Chudak and D.B Shmoys",
    "venue": "SIAM J. on Computing 33, 2003, 1-25",
    "year": 2003,
    "tags": [
      "Facility Location",
      "Approximation Algorithms"
    ],
    "award": null,
    "links": [
      {
        "label": "PDF",
        "url": "http://people.orie.cornell.edu/shmoys/pdf/ChudakShmoys.pdf"
      },
      {
        "label": "TXT",
        "url": "http://people.orie.cornell.edu/shmoys/pdf/ChudakShmoys.txt"
      }
    ]
  },
  {
    "title": "A constant-factor approximation algorithm for the k-median problem",
    "authors": "M. Charikar, S. Guha, E. Tardos, and D.B. Shmoys",
    "venue": "Journal Computer System Sciences 65, 2002, 129-149",
    "year": 2002,
    "tags": [
      "Facility Location",
      "Approximation Algorithms",
      "Clustering"
    ],
    "award": null,
    "links": [
      {
        "label": "PDF",
        "url": "http://people.orie.cornell.edu/shmoys/pdf/kmedian.pdf"
      },
      {
        "label": "TXT",
        "url": "http://people.orie.cornell.edu/shmoys/pdf/kmedian.txt"
      }
    ]
  },
  {
    "title": "Improved approximation algorithms for the k-level facility location problem",
    "authors": "K.I. Aardal, F.A. Chudak, and D.B. Shmoys",
    "venue": "Information Processing Letters 72, 1999, 161-167",
    "year": 1999,
    "tags": [
      "Facility Location",
      "Approximation Algorithms"
    ],
    "award": null,
    "links": [
      {
        "label": "PDF",
        "url": "http://people.orie.cornell.edu/shmoys/pdf/klevel.pdf"
      },
      {
        "label": "TXT",
        "url": "http://people.orie.cornell.edu/shmoys/pdf/klevel.txt"
      }
    ]
  },
  {
    "title": "Improved approximation algorithms for the capacitated facility location problem",
    "authors": "F.A. Chudak and D.B. Shmoys",
    "venue": "In the Proceedings of the 10th Annual ACM-SIAM Symposium on Discrete Algorithms, 1999, S875-S876",
    "year": 1999,
    "tags": [
      "Facility Location",
      "Approximation Algorithms"
    ],
    "award": null,
    "links": []
  },
  {
    "title": "The submodular joint replenishment problem",
    "authors": "M. Cheung, A.N. Elmachtoub, R. Levi, and D.B. Shmoys",
    "venue": "Mathematical Programming 158, 207-233",
    "year": null,
    "tags": [
      "Inventory"
    ],
    "award": null,
    "links": []
  },
  {
    "title": "Primal-Dual Schema for Capacitated Covering Problems",
    "authors": "T. Carnes and D.B. Shmoys",
    "venue": "Mathematical Programming A, 1-20, electronically published. [Preliminary version appeared in Proceedings of Integer Programming and Combinatorial Optimization, 2008, 288-302.]",
    "year": 2008,
    "tags": [
      "Inventory",
      "Linear Programming"
    ],
    "award": null,
    "links": [
      {
        "label": "PDF",
        "url": "http://people.orie.cornell.edu/shmoys/pdf/CarnesShmoys08.pdf"
      },
      {
        "label": "TXT",
        "url": "http://people.orie.cornell.edu/shmoys/pdf/CarnesShmoys08.txt"
      }
    ]
  },
  {
    "title": "Assortment optimazation under the multinomial logit model with random choice parameters",
    "authors": "P. Rusmevichientong, C. Tong, H. Topaloglu and D.B. Shmoys",
    "venue": "Production and Operations Management 23, 2023-2039, 2014",
    "year": 2023,
    "tags": [
      "Inventory"
    ],
    "award": null,
    "links": []
  },
  {
    "title": "A constant approximation algorithm for the one-warehouse-multi-retailer problem",
    "authors": "R. Levi, R. Roundy, D.B. Shmoys, and M. Sviridenko",
    "venue": "Management Science 54, 2008, 763-776. Preliminary version appeared in Proceedings of the 15th Annual ACM-SIAM Symposium on Discrete Algorithms, 2005, 365-374",
    "year": 2008,
    "tags": [
      "Inventory",
      "Approximation Algorithms"
    ],
    "award": null,
    "links": [
      {
        "label": "Journal Version PDF",
        "url": "http://people.orie.cornell.edu/shmoys/pdf/LeviRoundyShmoysSviridenko08.pdf"
      },
      {
        "label": "Journal Version TXT",
        "url": "http://people.orie.cornell.edu/shmoys/pdf/LeviRoundyShmoysSviridenko08.txt"
      }
    ]
  },
  {
    "title": "Primal-dual algorithms for deterministic inventory problems",
    "authors": "R. Levi, R. Roundy, and D.B. Shmoys",
    "venue": "Mathematics of Operations Research 31, 2006, 267-284. Preliminary version appeared in Proceedings of the 36th Annual Symposium on Theory of Computing, 2004, 353-362",
    "year": 2006,
    "tags": [
      "Inventory",
      "Linear Programming"
    ],
    "award": null,
    "links": [
      {
        "label": "Journal Version PDF",
        "url": "http://people.orie.cornell.edu/shmoys/pdf/jrp-journal.pdf"
      },
      {
        "label": "Journal Version TXT",
        "url": "http://people.orie.cornell.edu/shmoys/pdf/jrp-journal.txt"
      }
    ]
  },
  {
    "title": "Inventory and facility-location models with market selection",
    "authors": "R. Levi, J. Geunes, E. Romeijn, and D.B. Shmoys",
    "venue": "Proceedings of the 11th MPS Conference on Integer Programming and Combinatorial Optimization, 2005, 111-124",
    "year": 2005,
    "tags": [
      "Inventory"
    ],
    "award": null,
    "links": [
      {
        "label": "PDF",
        "url": "http://people.orie.cornell.edu/shmoys/pdf/market-ipco.pdf"
      },
      {
        "label": "TXT",
        "url": "http://people.orie.cornell.edu/shmoys/pdf/market-ipco.txt"
      }
    ]
  },
  {
    "title": "A PTAS for capacitated sum-of-ratios optimization",
    "authors": "P. Rusmevichientong, Z.-J. Shen, D.B. Shmoys",
    "venue": "Operations Research Letters 37, 2009, 230-238",
    "year": 2009,
    "tags": [
      "Other"
    ],
    "award": null,
    "links": []
  },
  {
    "title": "An improved approximation algorithm for the partial latin square extension problem",
    "authors": "C.P. Gomes, R.G. Regis, and D.B. Shmoys",
    "venue": "Operations Research Letters 32, 2004 479-484. A preliminary version appeared in Proceedings 14th Annual ACM-SIAM Symposium on Discrete Algorithms, 2003, 832-833",
    "year": 2004,
    "tags": [
      "Other",
      "Approximation Algorithms"
    ],
    "award": null,
    "links": [
      {
        "label": "PDF",
        "url": "http://people.orie.cornell.edu/shmoys/pdf/GomesRS03-final.pdf"
      },
      {
        "label": "TXT",
        "url": "http://people.orie.cornell.edu/shmoys/pdf/GomesRS03-final.txt"
      }
    ]
  },
  {
    "title": "Selective mapping: A strategy for optimizing the construction of linkage map",
    "authors": "T.J. Vision, D.G. Brown, D.B. Shmoys, R.T. Durrett, and S.D. Tanksley",
    "venue": "Genetics 155: 407-420, 2000. [ABSTRACT]",
    "year": 2000,
    "tags": [
      "Other"
    ],
    "award": null,
    "links": []
  },
  {
    "title": "Fast approximation algorithms for fractional packing and covering problems",
    "authors": "S.A. Plotkin, D.B. Shmoys, E. Tardos",
    "venue": "Mathematics of Operations Research 20, 1995, 257-301. Preliminary version appeared in the Proceedings of the 32nd Annual IEEE Symposium on the Foundations of Computer Science (1991), 495-504. ORIE TR-999",
    "year": 1995,
    "tags": [
      "Other",
      "Approximation Algorithms"
    ],
    "award": null,
    "links": []
  },
  {
    "title": "Improved approximation algorithms for network design problems",
    "authors": "M.X. Goemans, A.V. Goldberg, S. Plotkin, D.B. Shmoys, E. Tardos, and D.P. Williamson",
    "venue": "In the Proceeding of the 5th Annual ACM-SIAM Symposium on Discrete Algorithms (1994), 223-232. ORIE TR-1116",
    "year": 1994,
    "tags": [
      "Other",
      "Approximation Algorithms",
      "Networks"
    ],
    "award": null,
    "links": []
  },
  {
    "title": "Approximation algorithms for 2-stage stochastic optimization problems",
    "authors": "C. Swamy and D.B. Shmoys",
    "venue": "In Proceedings in FSTTCS 2006, 5-19",
    "year": 2006,
    "tags": [
      "Surveys",
      "Approximation Algorithms"
    ],
    "award": null,
    "links": [
      {
        "label": "PDF",
        "url": "http://people.orie.cornell.edu/shmoys/pdf/fsttcs-survey.pdf"
      },
      {
        "label": "TXT",
        "url": "http://people.orie.cornell.edu/shmoys/pdf/fsttcs-survey.txt"
      }
    ]
  },
  {
    "title": "The design and analysis of approximation algorithms: facility location as a case study",
    "authors": "D.B. Shmoys",
    "venue": "In: Trends in Optimization, AMS Proceedings of Symposia in Applied Mathematics 61, (S. Hosten, J. Lee, and R. Thomas, eds.), 2004, 85-97",
    "year": 2004,
    "tags": [
      "Surveys",
      "Approximation Algorithms"
    ],
    "award": null,
    "links": [
      {
        "label": "PDF",
        "url": "http://people.orie.cornell.edu/shmoys/pdf/ams-survey.pdf"
      },
      {
        "label": "TXT",
        "url": "http://people.orie.cornell.edu/shmoys/pdf/ams-survey.txt"
      }
    ]
  },
  {
    "title": "Approximation algorithms for facility location problems",
    "authors": "D.B. Shmoys",
    "venue": "In: Approximation Algorithms for Combinatorial Optimization, Lecture Notes in Computer Science 1913, (K. Jansen and S. Khuller, eds.), Springer, Berlin, 2000, 27-33",
    "year": 2000,
    "tags": [
      "Surveys",
      "Approximation Algorithms"
    ],
    "award": null,
    "links": [
      {
        "label": "PDF",
        "url": "http://people.orie.cornell.edu/shmoys/pdf/approx00.pdf"
      },
      {
        "label": "TXT",
        "url": "http://people.orie.cornell.edu/shmoys/pdf/approx00.txt"
      }
    ]
  },
  {
    "title": "Using linear programming in the design and analysis of approximation algorithms: two illustrative problems",
    "authors": "D.B. Shmoys",
    "venue": "In: Approximation Algorithms for Combinatorial Optimization, Lecture Notes in Computer Science 1444 (K. Jansen and J. Rolim, eds.), Springer, Berlin, 1998, 15-32",
    "year": 1998,
    "tags": [
      "Surveys",
      "Approximation Algorithms",
      "Linear Programming"
    ],
    "award": null,
    "links": [
      {
        "label": "PDF",
        "url": "http://people.orie.cornell.edu/shmoys/pdf/approx98.pdf"
      },
      {
        "label": "TXT",
        "url": "http://people.orie.cornell.edu/shmoys/pdf/approx98.txt"
      }
    ]
  },
  {
    "title": "[Approximation algorithms for] Cut problems and their application to divide-and-conquer",
    "authors": "D.B. Shmoys",
    "venue": "In: Approximation Algorithms for NP-hard Problems, (D.S. Hochbaum, ed.) PWS, 1997, 192-235",
    "year": 1997,
    "tags": [
      "Surveys",
      "Approximation Algorithms"
    ],
    "award": null,
    "links": [
      {
        "label": "PDF",
        "url": "http://people.orie.cornell.edu/shmoys/pdf/multicut.pdf"
      },
      {
        "label": "TXT",
        "url": "http://people.orie.cornell.edu/shmoys/pdf/multicut.txt"
      }
    ]
  },
  {
    "title": "Proc. National Academy of Sciences",
    "authors": "A.S. Schulz, D.B. Shmoys, and D.P. Williamson. Approximation algorithms",
    "venue": "94, 1997, 12734-12735",
    "year": 1997,
    "tags": [
      "Surveys"
    ],
    "award": null,
    "links": [
      {
        "label": "PDF",
        "url": "http://www.pnas.org/cgi/reprint/94/24/12734.pdf"
      }
    ]
  },
  {
    "title": "Computational complexity",
    "authors": "D.B. Shmoys and E. Tardos,",
    "venue": "In: The Handbook of Combinatorics (R.L. Graham, M. Grotschel, and L. Lovasz, eds.), North Holland, 1995, 1599-1645. This was written during the period 1987-1990, and so is not as recent a survey as its date suggests. Some pointers to more recent work were included in the final stage of publication. An earlier, more extensive version was published as a Cornell Technical Report",
    "year": 1995,
    "tags": [
      "Surveys"
    ],
    "award": null,
    "links": [
      {
        "label": "PDF",
        "url": "http://people.orie.cornell.edu/shmoys/pdf/hoc-comp.pdf"
      },
      {
        "label": "TXT",
        "url": "http://people.orie.cornell.edu/shmoys/pdf/hoc-comp.txt"
      },
      {
        "label": "PDF",
        "url": "http://people.orie.cornell.edu/shmoys/pdf/TR000918-1.pdf"
      },
      {
        "label": "TXT",
        "url": "http://people.orie.cornell.edu/shmoys/pdf/TR000918-1.txt"
      }
    ]
  },
  {
    "title": "Combinatorics in computer science",
    "authors": "L. Lovasz, D.B. Shmoys and E. Tardos",
    "venue": "In: The Handbook of Combinatorics (R.L. Graham, M.Grotschel, and L. Lovasz, eds.) North Holland, 1995, 2003-2038",
    "year": 2003,
    "tags": [
      "Surveys"
    ],
    "award": null,
    "links": [
      {
        "label": "PDF",
        "url": "http://people.orie.cornell.edu/shmoys/pdf/hoc-cs.pdf"
      },
      {
        "label": "TXT",
        "url": "http://people.orie.cornell.edu/shmoys/pdf/hoc-cs.txt"
      }
    ]
  },
  {
    "title": "Computing near-optimal solutions to combinatorial optimization problems",
    "authors": "D.B. Shmoys",
    "venue": "In: Combinatorial Optimization, (W. Cook, L. Lovasz, and P.D. Seymour, eds.) AMS, 1995, 355-397",
    "year": 1995,
    "tags": [
      "Surveys"
    ],
    "award": null,
    "links": [
      {
        "label": "PDF",
        "url": "http://people.orie.cornell.edu/shmoys/pdf/COMBOPT_APPROX_SURVEY.pdf"
      },
      {
        "label": "TXT",
        "url": "http://people.orie.cornell.edu/shmoys/pdf/COMBOPT_APPROX_SURVEY.txt"
      }
    ]
  }
];
