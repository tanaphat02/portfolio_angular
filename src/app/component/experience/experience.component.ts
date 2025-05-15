import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  imports: [RouterModule, CommonModule, MatButtonModule],
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  projects: any[] = [];
  selectedProject: any = null;

  ngOnInit(): void {
    this.projects = [
      {
        id: 'vendorverse',
        title: 'VendorVerse - Online Store Management Platform',
        description: 'A comprehensive e-commerce management platform for vendors.',
        longDescription: `
          This project developed "VendorVerse," a platform that allows business owners to easily create online stores for both general retail and restaurants. It includes customizable storefronts, ordering systems, and sales tracking. The project uses React.js for the frontend and Express.js for the server side, reducing costs and complexity compared to building a custom website.
        `,
        technologies: ['React.js', 'Node.js', 'Express', 'SQL', 'CSS'],
        features: [
          'Customizable storefront design',
          'Online product and food ordering system',
          'Sales dashboard and analytics',
          'Product and order management system'
        ],
        imageUrls: [
          'assets/images/vendorverse1.png',
          'assets/images/vendorverse2.png',
          'assets/images/vendorverse3.png'
        ],
        githubUrl: 'https://github.com/Bigver/VendorVerse'
      },
      {
        id: 'portfolio',
        title: 'Portfolio Website',
        description: 'A personal portfolio website showcasing projects, experience, and skills.',
        longDescription: `
          This portfolio website was built using Angular to showcase personal projects, education,
          experience, and skills in a modern and responsive layout. It demonstrates strong frontend
          development practices and a clean, user-friendly interface.
        `,
        technologies: ['Angular', 'CSS', 'TypeScript', 'Responsive Design'],
        features: [
          'Project showcase section',
          'Work experience timeline',
          'Responsive layout',
        ],
        imageUrls: [
          'assets/images/portfolio1.png',
          'assets/images/portfolio2.png',
          'assets/images/portfolio3.png'
        ],
        githubUrl: 'https://github.com/tanaphat02/portfolio_angular'
      }
    ];
  }

  openProjectModal(project: any): void {
    this.selectedProject = project;
  }

  closeProjectModal(): void {
    this.selectedProject = null;
  }
}
