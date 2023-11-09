<?php
    class Course {
        private $Id;
        private $Title;
        private $Image;

        public function __construct($Id, $Title, $Image) {
            $this->Id = $Id;
            $this->Title = $Title;
            $this->Image = $Image;
        }

        public function getId() { return $this->Id; }
        public function getTitle() { return $this->Title; }
        public function getImage() { return $this->Image; }
        
        public function setId($Id) { $this->Id = $Id; }
        public function setTitle($Title) { $this->Title = $Title; }
        public function setImage($Image) { $this->Image = $Image; }
    }
?>