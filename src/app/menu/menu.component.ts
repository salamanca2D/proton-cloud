import { Component, OnInit, ViewChild } from '@angular/core';
import {SkillsComponent} from '../skills/skills.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass']
})
export class MenuComponent implements OnInit {

  @ViewChild(SkillsComponent) child: SkillsComponent;

  constructor() { } 
 

  ngOnInit(): void {

  }
 
  public CHANGE(e:any)
  {
    if (e.index === 1)
    {
      setTimeout(()=>{
        this.child.RUN_ANIM();
      },600);
    }
  }

}
