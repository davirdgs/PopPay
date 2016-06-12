//
//  MainTabBarVC.swift
//  MasterCardHack
//
//  Created by Davi Rodrigues on 11/06/16.
//  Copyright © 2016 Davi Rodrigues. All rights reserved.
//

import UIKit

class MainTabBarVC: UITabBarController {

    override func viewDidLoad() {
        super.viewDidLoad()

         self.tabBar.items![0].image = UIImage(named: "cart")
         self.tabBar.items![1].image = UIImage(named: "cartao")
         self.tabBar.items![2].image = UIImage(named: "poup")
         self.tabBar.items![3].image = UIImage(named: "config")

        
        self.tabBar.items![0].title = "Carteira"
        self.tabBar.items![1].title = "Cartões"
        self.tabBar.items![2].title = "Poupança"
        self.tabBar.items![3].title = "Configuração"
        
        self.tabBar.barTintColor = UIColor(red: 60/255, green: 185/255, blue: 158/255, alpha: 1)
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }


}
