//
//  CardsVC.swift
//  MasterCardHack
//
//  Created by Davi Rodrigues on 12/06/16.
//  Copyright © 2016 Davi Rodrigues. All rights reserved.
//

import UIKit

class CardsVC: UIViewController {

    override func viewDidLoad() {
        super.viewDidLoad()

    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }
    
    @IBAction func ButtonHandler(sender: AnyObject) {
        self.performSegueWithIdentifier("toWeb", sender: self)
    }
    

    /*
    // MARK: - Navigation

    // In a storyboard-based application, you will often want to do a little preparation before navigation
    override func prepareForSegue(segue: UIStoryboardSegue, sender: AnyObject?) {
        // Get the new view controller using segue.destinationViewController.
        // Pass the selected object to the new view controller.
    }
    */

}
